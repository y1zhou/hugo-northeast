document.addEventListener("DOMContentLoaded", function () {
    const tocMask = document.getElementById("toc-background-mask");
    const tocMenu = document.getElementById("toc-container");
    const tocButton = document.getElementById("toc-button");
    const TOCLinks = document.querySelectorAll(
        "#toc-list a, #toc-background-mask, #toc-container, #toc-button"
    );
    TOCLinks.add;

    TOCLinks.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
            if (tocMask.classList.contains("bg-opacity-0")) {
                tocMask.classList.add("bg-opacity-75", "visible");
                tocMask.classList.remove("bg-opacity-0", "invisible");
                tocMenu.classList.add("opacity-100");
                tocMenu.classList.remove("opacity-0", "translate-x-full");
            } else {
                tocMenu.classList.add("opacity-0", "translate-x-full");
                tocMenu.classList.remove("opacity-100");
                tocMask.classList.add("bg-opacity-0", "invisible");
                tocMask.classList.remove("bg-opacity-75", "visible");
            }
        });
    });
});
