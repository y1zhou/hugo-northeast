// DEFAULT colors are for the light theme, and dark colors are for the dark theme.
// Names adopted from Material Design:
// https://material.io/design/color/the-color-system.html
const colors = require("tailwindcss/colors");
module.exports = {
    // buttons, tags
    primary: {
        lighter: colors.amber[100],
        DEFAULT: colors.amber[200],
        dark: colors.amber[300],
        darker: colors.amber[400],
    },
    // links
    secondary: {
        lighter: colors.blue[100],
        DEFAULT: colors.blue[700],
        dark: colors.blue[400],
    },

    background: {
        DEFAULT: colors.gray[100],
        dark: colors.gray[900],
    },
    // cards, menus, header
    surface: {
        lighter: colors.gray[50],
        DEFAULT: colors.gray[200],
        dark: colors.gray[700],
        darker: colors.gray[800],
    },
    // in-line code, warning blocks
    error: {
        lighter: colors.rose[50],
        DEFAULT: colors.red[100],
        dark: colors.red[300],
        darker: colors.red[500],
    },
    // text and icons
    on: {
        primary: {
            DEFAULT: colors.gray[900],
        },
        background: {
            DEFAULT: colors.gray[900],
            dark: colors.gray[200],
        },
        surface: {
            lighter: colors.gray[300],
            DEFAULT: colors.gray[500],
            dark: colors.gray[400],
        },
        error: {
            DEFAULT: colors.red[600],
            dark: colors.red[800],
        },
    },
};
