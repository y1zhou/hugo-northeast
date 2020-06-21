const TOCLinks = document.querySelectorAll("#toc-list a");
TOCLinks.forEach((element) => {
    element.addEventListener("click", toggleTOC);
});

function toggleTOC() {
    let tocMask = document.getElementById("toc-background-mask");
    let tocMenu = document.getElementById("toc-container");

    if (tocMask.classList.contains("invisible")) {
        tocMask.classList.remove("opacity-0", "invisible");
        tocMask.classList.add("opacity-75", "visible");
        tocMenu.classList.remove("opacity-0", "invisible");
        tocMenu.classList.add("opacity-100", "visible");
    } else {
        tocMask.classList.remove("opacity-75", "visible");
        tocMask.classList.add("opacity-0", "invisible");
        tocMenu.classList.remove("opacity-100", "visible");
        tocMenu.classList.add("opacity-0", "invisible");
    }
}
