---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
summary: ""  # appears in list of posts
categories: []  # main category; shown in post metadata
tags: []  # list of related tags

slug: "{{ .Name | title | anchorize }}"
toc: true  # table of contents button in post
# featured posts are shown on the homepage, and are shown first
# in the category/tags pages
featured: false
draft: false

weight: 1000  # smaller values are listed first

# full-width featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
header_image:
    caption: ""
    img_link: ""  # source of figure
    list_only: false  # don't show image in post; only in list views
---
