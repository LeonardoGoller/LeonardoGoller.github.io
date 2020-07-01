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

1. _There There_ by Tommy Orange
2. _Frankenstein; or, the Modern Prometheus_ by Mary Shelley
3. _The Godfather_ by Mario Puzo `*`
4. _The Haunting of Hill House_ by Shirley Jackson
5. _The Man in the High Castle_ by Philip K. Dick `*`
6. _Recursion_ by Blake Crouch
7. _A Scanner Darkly_ by Philip K. Dick
8. _Brave New World_ by Aldous Huxley
