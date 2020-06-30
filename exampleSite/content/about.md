---
author: Yi Zhou
title: About
date: 2020-06-30
description: A short description about this theme.
---

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
hugo --gc --minify
```

Files in the `public/` directory can now be served.
