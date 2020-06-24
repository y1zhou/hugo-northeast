---
title: "Hugo Shortcodes"
date: 2020-06-23T11:52:05-04:00
summary: "Demo of Hugo's shortcodes." # appears in list of posts
categories: ["example"] # main category; shown in post metadata
tags: ["media", "video", "Hugo"] # list of related tags

slug: "hugo-shortcodes"
toc: true # table of contents button in post
# featured posts are shown on the homepage, and are shown first
# in the category/tags pages
featured: false
draft: false

weight: 20 # smaller values are listed first

# full-width featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
header_image:
    caption: ""
    img_link: "" # source of figure
    list_only: false # don't show image in post; only in list views
---

Here's a demo of [Hugo's built-in shortcodes](https://gohugo.io/content-management/shortcodes/#use-hugos-built-in-shortcodes).

## Gists

The output will be a `<div>` with class `gist`.

{{< gist y1zhou ba9318ba819568fe2fa3466f5e373b96 >}}

## Instagram posts

The output is an `<iframe>` with classes `instagram-media` and `instagram-media-rendered`. The following shortcode has the option `hidecaption` added.

{{< instagram BWNjjyYFxVx hidecaption >}}

## `ref` and `relref` links

[This]({{< ref "first-post/index.md" >}}) is a `ref` link, and [this]({{< relref "first-post/index.md" >}}) is a `relref` link.

## Tweets

The output is a `<twitter-widget>` with classes `twitter-tweet` and `twitter-tweet-rendered`.

{{< tweet 877500564405444608 >}}

## Videos from Vimeo and Youtube

Here's the Vimeo video:
{{< vimeo 146022717 >}}

And here's a Youtube video:
{{< youtube w7Ft2ymGmfc >}}

## Alert shortcodes

There are two types of alerts: `note` and `warning`.

{{< alert note >}}
**This is a note**. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
{{</alert>}}

{{< alert warning >}}
**This is a warning**. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
{{</alert>}}
