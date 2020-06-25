let grid = document.querySelector(".grid");
let msnry;
imagesLoaded(grid, function () {
    // init Isotope after all images have loaded
    msnry = new Masonry(grid, {
        itemSelector: ".masonry-item",
        gutter: 5,
        fitWidth: true,
    });
});
