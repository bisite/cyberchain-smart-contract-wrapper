// Smart contract wrapper test

"use strict";

import { expect } from 'chai';
import { parseAddress, parseQuantity, privateKeysToAddress, privateKeyToAddress, RPC_HTTP_Provider, RPC_WebSocket_Provider, SignKeyECDSA, SignKeyMLDSA } from '../src';
import { ERC20Wrapper, TransferEvent } from "./utils/erc20"
import { ERC20_BYTECODE } from './utils/erc20-data';

const DEBUG_MODE = false;

const RPC_URL = process.env.TEST_NODE_HTTP_URL || "http://localhost:8545";
const RPC_WS_URL = process.env.TEST_NODE_WS_URL || "ws://localhost:8546";

const TEST_MIXED_WALLET: { signKeyECDSA: SignKeyECDSA, signKeyMLSA: SignKeyMLDSA } = {
    signKeyECDSA: {
        type: "ec-dsa",
        key: Buffer.from("de6383e195b7d78c6961c87d323170803d066a9d5ffc9a97a90fad15349398a3", "hex"),
    },
    signKeyMLSA: {
        type: "ml-dsa",
        secretKey: Buffer.from("58522749abefe6a52a40a60f62cf929167aa9286960c6a4b32529f212f1fb4a4104eeeb7667d615d725dae83349452b6cc896102a3057d2bcc05caa14e64015679669fea06557e042e1cbff0bc34d0cba22fd0fcc0f1e1cacbbc09163c2869fa2c90cb42d1821057df5ebf4eeedee1bf538f55557ba165c09eb91075f46bd405d0b020213728532008d434651c0352d32630980245c04668411881cb2029c8446a10276e59302044b62523084580980919226d1286285a188d83b05024064110c76441406a6484499c186dda0868c9283221013114c7641410115c020a01a00d64c8019b0265500468e326421c3481520421d8b04404278e40408c994061db0452d286705c2489104320442426839465e01282e0902583a68cc2469060b6200310515bc604db386eda1212924889d41070190942cb488910451041322440b624984841cb34521a4031cc14892283691b00911c038a2302099a868013b4101aa068d1960d1a2151dab2119a462824b969da36210b338d5a186643107121b19188308ce1408523434512b34d63400209300802069260282ad32268a0000d9a46209b00201b450de1042d543082ca9684501268a2165221136de040095ab824c826688a10714834260ac2855432440a8265dc404504b64100040621b22912c25019482d40404ec2180a84866c902800d4247288222c5a12060bb64511080600a750803280533690c1284511040909879112448de28464d8464a82806cd3420d5c1686e4109153a6504a3631d9108eda2262118189a34449d0c48c4a360014c565cb24658344250a0746639420980886dac80899164d18320408c56c1b834c03288e0ca184e1328912282223a165918465634806491249c9841084c0850c0961e4368de2b480dc824822c571189450caa22c18243218384cc3a42424b08d20328814a089a48268d1a0640a23285b168a1a4391208464a3b6704bc62504088d0a454513891121406820232c50a044dab62052240164b86490946519164e14224023242a89801024c72de43024dac02dd2848403814542960cd43811841011ca168443462198160d18198220c8455c28714b228a9cb469d812241c9865e28621614884123224238349dc167211a70580065102b18821394922186ee1806403c701cb34850009664b4685cc22449a264962164ccca48813000c1b08404c968d4b8411e2b84114a9240cc18521b64022068184b68c1cc5691b9701c31644624611489270c31c4301a21bd08dadf676cd62a41ebd88b1028db0b1ba22a6af363a79622a2107bcd0281827c81fc9fc87e6de1c823e956fd156311804599e4fcc016315280574f48d8b3c4f2f70105737901db2d9ff331df4d65affb75a57788f73654acbece6dece34422bc3038fe089cf570579eb3dc3f5e4b47ee540221b2223d00ac49f6e82f02edf9dd7baed9d3aad26dcff2610b27cad47ee16df2657febe71548592fbff0f9751d7644d7ff66b714652e065f0549cc5475c71023597369647604a6cb5939715b577378293c3a2783fb4132896e7760d68395d5e613ea480071a23d40e25ce0c6e054559eea3026c1b44b1237338c310269ad7d27b142806d66e08aef2ce3b84b6d4c15ca9abaf79da32664393131a00632379d520147c65c588cec200d291cf26ac8a48605ea610d742ebdfba25430d52ea261eec7922fe755ad1d535547f84e93e84c0c26ecb05350b7a98fb9317cf1496f5d71734a30353ba55581f0fdafe3f00d086f7b67955436b0de076eda885b0dd1f212c2dde11ade5d6850f237752cb54f9435543df0c0ba102f46684f19cd391940abd55f6c1332e595edc05a5ee00c8b79ea3cd0c516571a542d645ae7a552bd97fa4c04b3d6ef08a582569e145d9cace16a354e6933e4421cae234cb3e487980456bfa0f81ad0d5cc5be407df2a5c6940d42358ae26e9112e1b566c12816aebdc05287271f122a864733560e92e19591dfad4abcd4a14747a7f79e64ccf93509aa7533101a88e262753c568cc3ab1db70975074b0223eef1ef6b1b3fa46b148d7a0ed2ef9c31a03035034c6d4eee470dab81f8145b872e977b1f5226bc630353d6cbae83c2ad841c0c22d194d0d636a5f078792bd3bcc42bd8ba37d95000512191aeaa63406f91702291470cbfdedae1a37093f9eeec1fad7b92f3872a4739bcd2f85486b07db7fc12da664ee9a2b913690acc976d76f6c809cce242b320c61b76a9f4e8f13c3c06d085ada3eb966b5afcfc4546efa6a6892bf59318772b145d5881209bef2ce1ec9155d994dbbbc1a393428a826a7d9fc4c1ae99451c21d0c1ec407e0f4f812ade14db55dfe18aad12224b10843b4edce3bf456d18289a793db357e08497a4a3db90b2d50b912fb102ad4657d0da894b2353750d3d58db74ecc60ae72fa0016240cf80ec919f80f7127f7b6ace5253cda28aa0d31ed0543e78760a6f2e754f3c81de42fc268d3e2438e2abb415f9cd169c5764faf27baf63e1221fcc9199ddcc6ce6fc2c4fd2f5a48f545dceec73ee1c0f48e30d4908ddb8c329142f19388dd11ec42e119abc598ef40088d2aef55bc1986cf1cfc3dff40504b6e8372b466e5f66c3e4d27db6875daaec766e8ed41dff1bcdbdc4ffa74476371070c40a270d54c0b3b171c582aa2a0062d211f4fdd22854065a8d6e55e5422f8bdbf6d92c20c5c554f83fbf16fcc824ebbbe7ec0d08abcef23a88d374e44cafb74cc8556232a9b2882e4d6e763fd66ff9e3c67aabee602568f5e2aa2781660e5c8d220503830185004af8eac5a0df1ce8759de168297877c79e95373d919a97f016334d634b15d03d5fb35594cd1ab91448c112ef45d0da05a6febdcf3105c7e123a327d2292f1556d824dd95b93eb4afc20d0db7a697ee5c601532a7a9d5074c07c6dbc9e1c81718f9889b28a1e66749f656050e5e6492f2c22ed9dad5c398e880e51c21d955b26e6edf6e73b77e05e48d26d77681db2c8792d9df25b489b54eaf44085b48a5f8f82d485fdb86ec837db99284ba7372972b5d41ecb6c19f1c91a48e6647a647705dccb3e5b1783af94f03ab0cd97bc3f564987a295e6b1efb2e3f3f01358f9e1f237044c341f88e2f24ecded41840474a2b5793fb827bcb166ff2afb978b71ec5fcfc59a56fda8f73791a485163064e4c698622ba77fd2626ba44cb8dc9729cf4b209a230606c2628b83c9eeaa0d64dad2fabfcaa1e07fca46347cb12d7684f1fab6656f64a8a845f182c9a110a77c9f500ca171531fc2ca6f1907f50c89307bd2ab461f5f3f6375878c61779b2dc16932185812fa22a7e4817571d6bdcfe2cf1e5f0622d2cc980c2c1a4db61fff33313e1bc079210f05a4769f2d4fef98cf9cf2ac26391f8799d0e7c1e5bec4b6742baa4049dec3e192777b4a63cb1b82086d68656f07de1b5248391a525f93b2ee12b2de79361c359dd83f6dafaaac51bc18b2bbecd55b5bd1ef2ea22923c3d6a79acc9eaf4d7da1ca0b8ed283cd5d6bdfab1c146e659100f802fcc624fc95beeb5efd719db7cd1ebffd3e4a8d1044d6cecaf3905e332b77d3c8531cb463b08e251593a16b8cc28f1a3605c24f97c58ff283d3c", "hex"),
        publicKey: Buffer.from("58522749abefe6a52a40a60f62cf929167aa9286960c6a4b32529f212f1fb4a4ca91f0cdf2a9b9b90357b8f83559499a890ae341d582d81256440ef278218002f3676c72e0eb60546d32416867ad0a6a51d6b5397fe9db1db757645b5938c992d9821065ebe2ad6c6fdbf3ef127f121f4f616b7f6109b1cb4c901aa16495d07cba292e266bf78d8cf4f416cd441fc38bd1d620ad3abef30953b2a78cf16b815f1fe1894c4a051403c119901f79940fa5331b7b22f14e12ee013c48036ae49724ee54d2c1e9326b4841b3b83714b41041ac18d96d3864858fd6605f860e9b59eb0262e88549bb138dd9accc84eaa545efd8f411267b82641ae27810e9d8e2a27a771b765ee67821469beb93479727e2b5549a6445fcda915895c05fbe14ab04f4ae2ed4b4a79235b116eb22386fe30ab746ed9ca521a844fac433f3edfbef78df6d88b96d0d2fbd6437a4034c9ead5cb8e60daa5836b41e2cf90baa3beaaa5c546ee11e1aebe2cf67bc9ac33f5a011b9793660aad9fc3ebf5a978bd4847eec0ca81e58756bc2b0b31ae54da51956a28c0117a8a28b86c4db822a139e9c0edb2c7520700234526d5d3f0af475e6b7678c89013553ac2c042d8393d1a4aa028fea618047b397cc18dec606a5c47709b094fddf9ae7a91b4dbab6ee3fd6e3e41723d23d1c7344eb2d34a3b86326fd49ea83510d681f2511dbac0f1649b38f3103623592c198b8b2a3faf7fda71a1ea1ffdd576e9ece87927721f599c1c15d73672f4728d5dd9ae169cb327714cf19e72c16c95500790e3a7c60f56938e5d6baa3693ad7077a48851cd3a8257a899a48fbe658697ee21c3ae3008fe8e7fdc6995f01d344381fc5bf21eae48067aa7b2acec438167abb1316d469a3617ff47db43e9d884aa99cfdd64a113ccdb7828340c4dbdedde4e9ea673f35d9c1a56d83e66c853db3586a633145b3aabf68f9d359e900ef757f52963d565e59841bf65d08cfbb54c6be1c5a17fbcb9807c620c813551c3df842c51db2b890f0ad6f4da55dc296d2b374ad154d96b4fcf2c734a845d7bd0c173fee603e3dc8972b92e4ffffcc28c1495f19c6561dadc07863f4d725afb8828817a2cbb5c1c64b4c245400c94babae034791de4936c24d67c2d40f9e386d3f9e637bf495631a91362e8106d5b2f7ae9500039522e7f5fcb202a51a2f36ccf403562962fa882cc51058ea562c02f97b956aaecee486801f2ab8fad5871663dbd55d2e3127061287fc2e4b45db20d1bfbe4463db441693b5c8a727971093cf20361c101dac3409177d871d765eb37a0e1398672563e9201e299e2aa8e3a64591695c166e35e8957d559254c42d01c2ab86142fd63ac4b36e260e9138c9f30a373b25ca81b581de47cd098ecd3ec04803a4a375c1caffbb8cc0e2676c1d522116cb0cff2cfd2e25177a6a7123ba7bbd3d6f1fcb42dfff8d9d5fbd5a03e1349f3450f041b4ec780af55a0145a7d6e405d2fe45ce413becde94aa63f34ac650b1118ca2a280bec5e675c55a47f358c989cd7008670686ae72f2877692251da8cb6d0341d663f24d6e54cb7d000659a331bd6680a16ce8aa5057ed5da393c0b0d7f283f0119d14f97e351835820d5818b7428de59aaa1988d824bbfb6d2c565d0eef559d7df09223aa6e8a13fde00951749a6f67c1db5f3413abab225f9e46565cf06119993690cffbacb639fbce53569a65508ea179add193c60d5bce45de38cfd7821fb60c90237ee1cdb03c497c9aeb4ce613d1144f5ae290b16952ca66bf9f98095fa1042de826c8f76205d9a35890659f159a22a7d68f9376d25f4543ea672dfe8ecf895fbfcfd9432c8d04a3b3840", "hex"),
        spec: 44,
    }
}

const TEST_SIGN_KEYS = [
    {
        signKey: TEST_MIXED_WALLET.signKeyECDSA,
        complementaryAddress: privateKeyToAddress(TEST_MIXED_WALLET.signKeyMLSA)
    },
    {
        signKey: TEST_MIXED_WALLET.signKeyMLSA,
        complementaryAddress: privateKeyToAddress(TEST_MIXED_WALLET.signKeyECDSA)
    },
];

const TEST_ADDRESS = privateKeysToAddress(TEST_MIXED_WALLET.signKeyECDSA, TEST_MIXED_WALLET.signKeyMLSA);

const TEST_ADDRESS_1 = parseAddress("0x64eBC0159b5FDCEe8EE623DCc7bF8D296F17826B");

const TEST_INITIAL_SUPPLY = parseQuantity(1000);
const TEST_TOKEN_NAME = "TestToken";
const TEST_TOKEN_SYMBOL = "T";

const RPC_PROVIDERS = [
    {
        name: "No provider",
        provider: undefined,
    },
    {
        name: "HTTP Provider",
        provider: new RPC_HTTP_Provider(RPC_URL),
    },
    {
        name: "Websocket Provider",
        provider: (new RPC_WebSocket_Provider(RPC_WS_URL)).on("error", (err => {
            console.error(err);
        })),
    },
];

for (let rpcProvider of RPC_PROVIDERS) {
    for (let testKey of TEST_SIGN_KEYS) {
        const signKey = testKey.signKey;
        const complementaryAddress = testKey.complementaryAddress;

        describe("Smart contract wrapper (" + rpcProvider.name + ") with key type " + signKey.type, function () {
            this.timeout(30000);

            let contract: ERC20Wrapper;

            it('Should deploy without errors', async () => {
                contract = await ERC20Wrapper.deploy(TEST_TOKEN_NAME, TEST_TOKEN_SYMBOL, TEST_INITIAL_SUPPLY, ERC20_BYTECODE, {
                    provider: rpcProvider.provider,
                    rpcURL: RPC_URL,
                    signKey,
                    complementaryAddress,
                    isFeeMarket: true,
                    logFunction: msg => {
                        if (DEBUG_MODE) {
                            console.log("[DEBUG] " + msg);
                        }
                    },
                });
            });

            it('Should set the contract params properly', async () => {
                const storedName = await contract.name();
                const storedSymbol = await contract.symbol();
                const storedInitialSupply = await contract.totalSupply();

                expect(storedName).to.be.equal(TEST_TOKEN_NAME);
                expect(storedSymbol).to.be.equal(TEST_TOKEN_SYMBOL);
                expect(storedInitialSupply).to.be.equal(TEST_INITIAL_SUPPLY);
            });

            it('Should give the initial supply to the owner of the contract', async () => {
                const bal = await contract.balanceOf(TEST_ADDRESS);

                expect(bal).to.be.equal(TEST_INITIAL_SUPPLY);
            });

            let event: TransferEvent;
            let blockNum: bigint;

            it('Should transfer to test address without errors', async () => {
                const res = await contract.transfer(TEST_ADDRESS_1, BigInt(1), {
                    signKey,
                    complementaryAddress,
                    isFeeMarket: true,
                    logFunction: msg => {
                        if (DEBUG_MODE) {
                            console.log("[DEBUG] " + msg);
                        }
                    },
                });

                blockNum = res.receipt.blockNumber;

                event = res.result.filter("Transfer").getTransferEvent(0).data;
            });

            it('Should emit the Transfer event', () => {
                expect(event).not.to.be.null;

                if (event !== null) {
                    expect(event.from.toUpperCase()).to.be.equal(TEST_ADDRESS.toUpperCase());
                    expect(event.to.toUpperCase()).to.be.equal(TEST_ADDRESS_1.toUpperCase());
                    expect(event.value).to.be.equal(BigInt(1));
                }
            });

            it('Should have incremented the balance of the test address', async () => {
                const bal = await contract.balanceOf(TEST_ADDRESS);

                expect(bal).to.be.equal(TEST_INITIAL_SUPPLY - BigInt(1));

                const bal1 = await contract.balanceOf(TEST_ADDRESS_1);

                expect(bal1).to.be.equal(BigInt(1));
            });


            it('Should have saved the transfer event', async () => {
                const events = await contract.findEvents(blockNum, blockNum);

                expect(events.length()).to.be.greaterThan(0);

                const transferEvent = events.filter("Transfer").getTransferEvent(0);

                expect(transferEvent.data.from.toUpperCase()).to.be.equal(TEST_ADDRESS.toUpperCase());
                expect(transferEvent.data.to.toUpperCase()).to.be.equal(TEST_ADDRESS_1.toUpperCase());
                expect(transferEvent.data.value).to.be.equal(BigInt(1));
            });
        });
    }
}
