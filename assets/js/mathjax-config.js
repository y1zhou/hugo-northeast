window.MathJax = {
    loader: {
        load: ["[tex]/noerrors"],
    },
    tex: {
        inlineMath: [["$", "$"]],
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
        ],
        tags: "ams",
        processEscapes: true,
        packages: { "[+]": ["noerrors"] },
    },
    chtml: {
        scale: 0.9,
    },
    options: {
        skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
    },
};

window.addEventListener("load", () => {
    document.querySelectorAll("mjx-container").forEach(function (x) {
        x.parentElement.classList.add("has-jax");
    });
});
