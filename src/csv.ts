// CSV simple parser

"use strict";

/**
 * Parses simple CSV line
 * @param str The line
 * @param separator The separator character
 * @param quotesChar The quotes character
 * @returns The splitted parts
 */
export function parseSimpleCsv(str: string, separator: string, quotesChar: string): string[] {
    const res: string[] = [];

    let buf = "";

    let parsingQuotedString = false;
    let parsingQuotedStringEnded  = false;
    let lastEscaped = false;

    for (let i = 0; i < str.length; i++) {
        const c = str[i];

        if (!parsingQuotedString) {
            if (c === separator) {
                if (parsingQuotedStringEnded) {
                    parsingQuotedStringEnded = false;
                    try {
                        buf = JSON.parse('"' + buf + '"');
                    } catch (ex) { }
                }

                res.push(buf);
                buf = "";
            } else if (c === quotesChar && !buf.trim() && !parsingQuotedStringEnded) {
                parsingQuotedString = true;
                parsingQuotedStringEnded = false;
                buf = "";
            } else {
                if (parsingQuotedStringEnded) {
                    parsingQuotedStringEnded = false;
                    buf = quotesChar + buf + quotesChar;
                }
                buf += c;
            }
        } else {
            if (c === quotesChar) {
                if (lastEscaped) {
                    if (c === "\"") {
                        buf += "\\\"";
                    } else {
                        buf += c;
                    }

                    lastEscaped = false;
                } else {
                    parsingQuotedStringEnded = true;
                    parsingQuotedString = false;
                }
            } else if (c === "\\") {
                if (lastEscaped) {
                    lastEscaped = false;
                    buf += "\\\\";
                } else {
                    lastEscaped = true;
                }
            } else if (c === "\"") {
                lastEscaped = false;
                buf += "\\\"";
            } else {
                if (lastEscaped) {
                    lastEscaped = false;
                    buf += "\\";
                }

                buf += c;
            }
        }
    }

    if (parsingQuotedString || parsingQuotedStringEnded) {
        try {
            buf = JSON.parse('"' + buf + '"');
        } catch (ex) { }
    }

    res.push(buf);

    return res;
}

/**
 * Turns array into simple csv format
 * @param row The row
 * @param separator Separator character
 * @returns The CSV string
 */
export function toSimpleCsv(row: string[], separator?: string): string {
    return row.map(f => JSON.stringify(f)).join(separator || ",");
}
