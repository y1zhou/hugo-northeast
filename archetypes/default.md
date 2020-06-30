---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
summary: ""  # appears in list of posts
categories: []  # main category; shown in post metadata
tags: []  # list of related tags

slug: "{{ .Name | title | anchorize }}"
toc: true  # table of contents button in post

# featured posts are shown on the homepage
featured: false
draft: false

weight: 1000  # smaller values are listed first

# full-width featured image
# To use, add an image named `featured.jpg/png` to your page's folder, or
# fill the unsplash_id and the photo will be automatically retrieved.
header_image:
    caption: ""  # Give credits here, or whatever captions you want to add (support markdown)
    unsplash_id: ""  # Unsplash ID of the picture
---
