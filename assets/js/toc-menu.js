document.addEventListener("DOMContentLoaded", function () {
    const tocMask = document.getElementById("toc-background-mask");
    const tocMenu = document.getElementById("toc-container");
    const ToggleTOC = document.querySelectorAll(
        "#toc-button, #toc-background-mask, #toc-list a"
    );

    ToggleTOC.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
            if (tocMask.classList.contains("active")) {
                tocMenu.classList.add("translate-x-full");
                setTimeout(function () {
                    tocMask.style.visibility = "";
                }, 300);
            } else {
                tocMask.style.visibility = "visible";
                tocMenu.classList.remove("translate-x-full");
            }
            tocMask.classList.toggle("active");
        });
    });
});
