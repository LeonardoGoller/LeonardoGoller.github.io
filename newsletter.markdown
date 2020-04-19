---
title: Newsletter
layout: default
---

## Newsletter

Subscribe to the newsletter to receive new posts (and absolutely nothing else) 
directly in your inbox.  You may also use a feed reader to subscribe to the
[Atom feed](/feed.xml), if you prefer not giving out your email.

<form id="newsletter"
      onsubmit="onSubscribe(3000)"
      target="response"
      method="POST"
      action="https://script.google.com/macros/s/AKfycbz4lfp-CLgsoOdRyYUTn3gi7F7aa8XPUQEKS2rorPMHJGZxTmc/exec">
  <input type="email" name="email" placeholder="Enter your email">
  <button id="subscribe" type="submit">Subscribe</button>
</form>

<iframe id="response" name="response"></iframe>

<p id="success"><em>Subscription to the newsletter was successful. You will be
redirected to the homepage in 3s.</em></p>

<script src="/assets/scripts/subscribe.js"></script>
