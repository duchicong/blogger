---
layout: post
title: 'Build static web with Jekyll!'
date: 2021-01-13 22:16:06 +0700
categories: jekyll
---

# Build static web with Jekyll

```yml
  # create serve localhost without auto reload page when working
  bundle exec jekyll serve

  # auto reload page when working on localhost
  bundle exec jekyll serve --livereload

  # convert or buid your web to html, css basic
  bundle exec jekyll build

  # open directory to path minima theme
  # Linux:
  nautilus $(bundle info --path minima)
  # Mac:
  open $(bundle info --path minima)
  # continue, you go to `minimar-2.5.1` and copy: assets, _incluses, _layouts, _sass and paste into your current project
  # has two thing you can do is: theme minima here so put a hashtag next to it and just above it i'll do
  # Removed minima theme as it is now a regular theme.
  # copy it and open 2 files:
  # Gemfile:
  gem "minima", "~> 2.5"
  # comment line above and paste `# Removed minima theme as it is now a regular theme.` before it.
  # File _config.yml: find line `theme: minima` comment and paste `# Removed minima theme as it is now a regular theme.` before it.
  # save 2 files and open termial typing:
  bundle update

  # after changed files config of jelyll, you must reload server run again:
  bundle exec jekyll serve --livereload
```

[jekyll-build]: https://www.youtube.com/watch?v=8IgNO1HgCrk&list=PLWzwUIYZpnJuT0sH4BN56P5oWTdHJiTNq&index=4
