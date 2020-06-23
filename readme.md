# Hugo Theme NorthEast

A [Hugo](https://gohugo.io) theme with [Tailwind CSS](https://tailwindcss.com), setup with the [starter theme by dirkolbrich](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter).

## Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe's PostCSS requires it.

```bash
npm install -g postcss-cli autoprefixer
```

Make sure to use a minimum Hugo version of v0.69.0 and above.

## Features

-   [ ] Homepage
    -   [ ] Introduction section
    -   [ ] Featured posts
    -   [ ] Featured publications
    -   [ ] Recent posts
    -   [ ] Pagination
    -   [ ] Tag cloud
-   [ ] Header
    -   [ ] Logo
    -   [x] Title if logo doesn't exist
    -   [ ] Menu of links
        -   [x] Large screen
        -   [ ] Mobile
    -   [x] Search
    -   [ ] Light/dark theme toggle
-   [x] Footer
    -   [x] Social links
    -   [x] Copyright
-   [ ] Post
    -   [x] Tags
    -   [x] xx min read
    -   [x] Category
    -   [x] Featured picture
    -   [x] Tables
    -   [x] Blockquotes
    -   [x] Code highlighting
    -   [x] Math rendering
    -   [x] Footnote back reference
    -   [ ] Previous/next post in the same category
    -   [ ] Related posts
-   [ ] Categories/Tags page
    -   [ ] Feature picture
    -   [ ] List of posts
    -   [ ] Sort based on featured & post time
-   [ ] Publications
    -   [ ] Support `.bib` files
    -   [ ] External link to DOI/PDF
-   [ ] Shortcodes
    -   [x] Highlight (mark) in post
    -   [x] Figure w/ captions, links and numbering
-   [x] Partials
    -   [x] Go back to top
    -   [x] Table of contents
    -   [ ] Search screen w/ Algolia
    -   [x] List of social links (footer)
