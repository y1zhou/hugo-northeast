# Hugo Theme NorthEast

A [Hugo](https://gohugo.io) theme with [Tailwind CSS](https://tailwindcss.com).

## Prerequisites

You'll need `git` and `npm` installed.

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe's PostCSS requires it.

```bash
npm install -g postcss-cli autoprefixer
```

Make sure to use a minimum Hugo version of v0.69.0 and above.

## Installation

Go to the root directory of your Hugo website, or create a new site with

```bash
hugo new site hugo-example-site
cd hugo-example-site
git init
```

Now you can add the theme with

```bash
git submodule add https://github.com/y1zhou/hugo-northeast.git themes/hugo-northeast
```

To install the node modules (most importantly Tailwind CSS),

```bash
cd themes/hugo-northeast
npm install
```

Finally, add `theme = "hugo-northeast` in the `config.toml` file in the root directory of your Hugo website.

The website is now good to go! Run `hugo server -D` to see a live preview of it. To build the website for deployment, run

```bash
hugo --gc && hugo --minify
```

Files in the `public/` directory can now be served.

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
    -   [x] Previous/next post in the same category
    -   [ ] Related posts
-   [ ] Categories/Tags page
    -   [ ] Feature picture
    -   [x] List of posts
    -   [ ] Sort based on featured & post time
-   [ ] Publications
    -   [ ] Support `.bib` files
    -   [ ] External link to DOI/PDF
-   [x] Shortcodes
    -   [x] Highlight (mark) in post
    -   [x] Figure w/ captions, links and numbering
    -   [ ] Alert (note and warning)
-   [ ] Partials
    -   [x] Go back to top
    -   [x] Table of contents
    -   [ ] Search screen w/ Algolia
    -   [x] List of social links (footer)

# Credits

-   [Starter theme by @dirkolbrich](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter)
-   [Academic theme by @gcushen](https://sourcethemes.com/academic/)
