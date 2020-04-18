---
title: Newsletter
layout: default
---

## Newsletter

Subscribe to the newsletter to receive new posts (and absolutely nothing else) 
directly in your inbox.  You may also use a feed reader to subscribe to the
[Atom feed](/feed.xml), if you prefer not giving out your email.

<iframe name="hidden_iframe" id="hidden_iframe"></iframe>
<form id="newsletter" 
      action="https://docs.google.com/forms/d/e/1FAIpQLScWegDMIhenyxzDyZHZ_K_JcGUBWiPCnCdtrfEmu1NSB4zuqg/formResponse" 
      method="POST"
      target="hidden_iframe"
      onsubmit="onNewsletterSubmit()">
  <input type="email" name="entry.241314092" placeholder="Enter your email">
  <button id="subscribe" type="submit">Subscribe</button>
</form>

<p id="success"><em>Subscription to newsletter successful. You will be
redirected to the homepage now.</em></p>

<script src="/assets/scripts/success.js"></script>
