const defaultTheme = require("tailwindcss/defaultTheme");
const neColors = require("./tailwind-colors"); // ne stands for northeast;
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
                serif: ['"PT Serif"', ...defaultTheme.fontFamily.serif],
                mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                ne: neColors,
            },
        },
    },
    variants: {},
    plugins: [],
};
