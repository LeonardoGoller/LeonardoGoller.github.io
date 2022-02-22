---
title: Books
layout: default
---

# Books

I have set this page up to track
the books I read. Books listed here are fiction, and non-academic non-fiction;
academic books are not tracked.

Books I especially liked are marked with an asterisk  `*`.


## Books I am currently reading

{% for book in site.currentbooks %}
* _{{ book.title }}_ by {{ book.author }}
{% endfor %}


## Books I have read this year

1. _An Absolutely Remarkable Thing_ by Hank Green `*`
