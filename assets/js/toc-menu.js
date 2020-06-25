function toggleTOC() {
    let tocMask = document.getElementById("toc-background-mask");
    let tocMenu = document.getElementById("toc-container");

    if (tocMask.classList.contains("bg-opacity-0")) {
        tocMask.classList.remove("bg-opacity-0", "invisible");
        tocMask.classList.add("bg-opacity-75", "visible");
        tocMenu.classList.remove("opacity-0", "translate-x-full");
        tocMenu.classList.add("opacity-100");
    } else {
        tocMenu.classList.remove("opacity-100");
        tocMenu.classList.add("opacity-0", "translate-x-full");
        tocMask.classList.remove("bg-opacity-75", "visible");
        tocMask.classList.add("bg-opacity-0", "invisible");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const TOCLinks = document.querySelectorAll("#toc-list a");
    TOCLinks.forEach((element) => {
        element.addEventListener("click", () => {
            setTimeout(toggleTOC, 0);
        });
    });
});
