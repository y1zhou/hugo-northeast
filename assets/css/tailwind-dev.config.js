const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    darkMode: "media",
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                serif: ['"PT Serif"', ...defaultTheme.fontFamily.serif],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    variants: {},
    plugins: [],
};
