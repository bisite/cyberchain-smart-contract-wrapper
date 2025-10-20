module.exports = {
  entryPoints: ['src'],
  out: 'docs',
  exclude: ['src/util.ts', 'test/**/*.ts'],
  plugin: 'typedoc-plugin-markdown',
  readme: 'none',
  gitRevision: 'master',
  githubPages: false,
  excludePrivate: true,
  excludeProtected: true,
}
