---
title: Books
layout: default
---

# Books

I have set this page up to track the books I read. 
Books I especially liked are marked with an asterisk  `*`.

## Books I am currently reading

{% for book in site.currentbooks %}
* _{{ book.title }}_ by {{ book.author }}
{% endfor %}


## Other books I have read this year

1. _An Absolutely Remarkable Thing_ by Hank Green `*`
2. _A Wizard of Earthsea_ by Ursula K. le Guin `*`
3. _The Tombs of Atuan_ by Ursula K. le Guin `*`
4. _A Beautifully Foolish Endeavour_ by Hank Green
