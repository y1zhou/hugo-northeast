document.addEventListener("DOMContentLoaded", () => {
    let res = [];
    const searchButton = document.getElementById("header-search-button");
    const searchScreen = document.getElementById("search-screen");
    const searchWrapper = document.getElementById("search-wrapper");

    const searchInput = searchWrapper.querySelector("input");
    const searchPopularTags = document.getElementById("search-popular-tags");
    const searchResult = searchWrapper.querySelector(".search-results");

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
                searchInput.select();
            }
            searchScreen.classList.toggle("active");
        });
    });

    searchInput.addEventListener("click", (event) => {
        // Prevent closing the search screen on clicking the input bar
        event.stopPropagation();
        event.target.focus();
    });

    function timestamp2Date(s) {
        let ans = new Date(s);
        let month = (ans.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        let date = ans.getDate().toString();
        if (date.length == 1) {
            date = "0" + date;
        }
        return `${ans.getFullYear()}-${month}-${date}`;
    }

    function pickSnippetTerm(hit) {
        let ans = hit.terms[0];
        hit.terms.forEach((term) => {
            if (hit.match[term].length > hit.match[ans].length) {
                ans = term;
            }
        });
        return ans;
    }

    function snippetSubstr(s, substr, contextLen = 200) {
        let pos = s.toLowerCase().indexOf(substr.toLowerCase());
        if (pos < 0 || s.length < contextLen * 2) {
            return s;
        }

        let startPos = Math.max(pos - contextLen, 0);
        let ans = s.slice(startPos, pos + contextLen).trim();
        startPos = pos > 0 ? ans.indexOf(" ") : 0;
        ans = ans.substr(startPos).replace("/s+/g", " ").trim();
        return `...${ans}...`;
    }

    function markMatches(hit) {
        let term = pickSnippetTerm(hit);

        const re = new RegExp(`(${hit.terms.join("|")})`, "gi");

        let matches = {};
        hit.match[term].forEach((field) => {
            let ans = snippetSubstr(hit[field], term);
            ans = ans.replace(re, `<mark>$1</mark>`);
            matches[field] = ans;
        });

        return matches;
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

            searchInput.addEventListener("keyup", (e) => {
                let searchString = e.target.value;
                if (searchString && searchString.length > 2) {
                    res = searchIndex.search(searchString);
                } else {
                    res = [];
                    searchResult.innerHTML = "";
                }

                if (res.length > 0) {
                    searchPopularTags.classList.add("hidden");
                    searchResult.innerHTML = res
                        .map((hit) => {
                            let ans = markMatches(hit);
                            ans.date = timestamp2Date(hit.date);
                            ans.featured = hit.featured
                                ? `<i class="fas fa-star text-yellow-400 pr-1"></i>`
                                : "";
                            if (!("title" in ans)) {
                                ans.title = hit.title;
                            }
                            if (!("content" in ans)) {
                                if ("summary" in ans) {
                                    ans.content = ans.summary;
                                } else {
                                    ans.content = hit.summary;
                                }
                            }
                            return `<li><a href="${hit.href}">
                            <div class="search-res-header">
                            <span class="search-res-title">${ans.title} ${ans.featured}</span>
                            <span class="search-res-date">${ans.date}</span>
                            </div>
                            <div class="search-res-content">${ans.content}</div>
                            </a></li>`;
                        })
                        .join("");
                } else {
                    searchPopularTags.classList.remove("hidden");
                }
            });
        })
        .catch((error) => {
            console.error(error);
        });
});

