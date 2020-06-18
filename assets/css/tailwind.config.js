const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    purge: {
        enabled: true,
        content: [
            themeDir + "layouts/**/*.html",
            themeDir + "content/**/*.html",
            "layouts/**/*.html",
            "content/**/*.html",
            "exampleSite/layouts/**/*.html",
            "exampleSite/content/**/*.html",
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                serif: ['"PT Serif"', ...defaultTheme.fontFamily.serif],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            },
            screens: {
                dark: { raw: "(prefers-color-scheme: dark)" },
                // => @media (prefers-color-scheme: dark) { ... }
            },
        },
    },
    variants: {},
    plugins: [],
};
