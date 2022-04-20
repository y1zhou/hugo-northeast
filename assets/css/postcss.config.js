const themeDir = __dirname + "/../../";

module.exports = {
    plugins: [
        require("postcss-import")({
            path: [themeDir],
        }),
        process.env.HUGO_ENVIRONMENT === "production"
            ? require("tailwindcss")(themeDir + "assets/css/tailwind.config.js")
            : require("tailwindcss")(
                  themeDir + "assets/css/tailwind.config.js"
              ),
        require("autoprefixer")({
            path: [themeDir],
        }),
    ],
};
