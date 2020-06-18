const themeDir = __dirname + "/../../";
module.exports = {
    purge: [
        themeDir + "layouts/**/*.html",
        themeDir + "content/**/*.html",
        "layouts/**/*.html",
        "content/**/*.html",
        "exampleSite/layouts/**/*.html",
        "exampleSite/content/**/*.html",
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
