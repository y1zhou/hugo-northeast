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
};
