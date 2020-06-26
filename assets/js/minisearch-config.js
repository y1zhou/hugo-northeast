document.addEventListener("DOMContentLoaded", function () {
    let searchResults = [];
    const searchButton = document.getElementById("header-search-button");
    const searchScreen = document.getElementById("search-screen");
    const searchWrapper = document.getElementById("search-wrapper");

    const searchInput = searchWrapper.querySelector("input");
    const searchPopularTags = document.getElementById("search-popular-tags");
    const searchResultElement = searchWrapper.querySelector(".search-results");

    [searchButton, searchScreen].forEach((el) => {
        el.addEventListener("click", () => {
            if (searchScreen.classList.contains("active")) {
                searchWrapper.classList.add("-translate-y-4");
                setTimeout(function () {
                    searchScreen.style.visibility = "";
                }, 150);
            } else {
                searchScreen.style.visibility = "visible";
                searchWrapper.classList.remove("-translate-y-4");
                searchInput.focus();
            }
            searchScreen.classList.toggle("active");
        });
    });

    function tags(tags, searchString) {
        let tagHTML = (tags.split(" ; ") || [])
            .filter(function (i) {
                return i && i.length > 0;
            })
            .map(function (i) {
                return "<span class='tag'>" + mark(i, searchString) + "</span>";
            });
        return tagHTML.join("");
    }

    function mark(content, search) {
        if (search) {
            let pattern = /^[a-zA-Z0-9]*:/i;
            search.split(" ").forEach(function (s) {
                if (pattern.test(s)) {
                    s = s.replace(pattern, "");
                }
                if (s && s.startsWith("+")) {
                    s = s.substring(1);
                }
                if (
                    s &&
                    s.indexOf("~") > 0 &&
                    s.length > s.indexOf("~") &&
                    parseInt(s.substring(s.indexOf("~") + 1)) ==
                        s.substring(s.indexOf("~") + 1)
                ) {
                    s = s.substring(0, s.indexOf("~"));
                }
                if (!s || s.startsWith("-")) {
                    return;
                }
                let re = new RegExp(s, "i");
                content = content.replace(re, function (m) {
                    return "<mark>" + m + "</mark>";
                });
            });
        }

        return content;
    }

    fetch("/minisearch.json")
        .then((response) => response.json())
        .then((searchContent) => {
            let searchIndex = new MiniSearch({
                idField: "objectID",
                fields: ["title", "summary", "content"], // fields to index for full-text search
                storeFields: [
                    "title",
                    "date",
                    "href",
                    "featured",
                    "summary",
                    "content",
                ], // fields to return with search results
                searchOptions: {
                    boost: { title: 3, summary: 2 },
                    prefix: true,
                },
            });
            searchIndex.addAll(searchContent);

            searchInput.addEventListener("click", (event) => {
                event.stopPropagation();
                event.target.focus();
            });

            searchInput.addEventListener("keyup", (e) => {
                let searchString = e.target.value;
                if (searchString && searchString.length > 2) {
                    searchResults = searchIndex.search(searchString);
                } else {
                    searchResults = [];
                }

                if (searchResults.length > 0) {
                    searchPopularTags.classList.add("hidden");
                    searchResultElement.innerHTML = searchResults
                        .map((res) => {
                            return `<li><a href="${res.href}">${res.title}</a>`;
                        })
                        .join("");
                } else {
                    searchPopularTags.classList.remove("hidden");
                    searchResultElement.innerHTML =
                        "<li><p class='no-result'>No results found</p></li>";
                }
            });
        })
        .catch((error) => {
            console.error(error);
        });
});
