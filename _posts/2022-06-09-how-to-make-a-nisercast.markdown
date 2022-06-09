---
layout: post
title:  "How to Make a NiSERCast"
date: 2022-05-29 00:00:01 +0530
tags: []
excerpt: It has been a year since the last episode of NiSERCast, and it has been more than two years since the idea of a science communication podcast led by NISER students was initially conceived. Partly for archival reasons and partly for self-indulgent reasons, here are some reflections from my involvement in the project.
---

It has been a year since the [last episode of NiSERCast](https://nisercast.gitlab.io/2021/04/19/a-story-for-everything.html), 
and it has been more than two years since the idea of a science communication
podcast led by NISER students was initially conceived. Partly for archival
reasons and partly for self-indulgent reasons, here are some reflections from
my involvement in the project.

For those who don't know, [NiSERCast](https://nisercast.gitlab.io/) 
is an outreach project started by a few NISER students, including myself,
consisting of a podcast in which students have conversations with professors
about their research and their life in academia. We were only able to release
one episode, and when the second wave of the coronavirus hit India, we lost
momentum and have unfortunately been on a hiatus since May 2021.

## Prologue

It was the February of 2020 when [Spandan](https://surelynottrue.github.io/),
who was also my roommate at the time, brought up the idea of a student led
podcast based around conversations with NISER professors. As we imagined it at
the time, it was going to be like MIT OpenCourseWare's [Chalk
Radio](https://chalk-radio.simplecast.com/), but more informal, less
professional, and with lower production values. Over a weekend, Spandan,
and I whipped up a very quick and dirty website and configured an
Atom feed for the podcast, and then we sent out a wider call for volunteers via
the Science Activities Club (SAC). 

I must say, I was quite overwhelmed by the initial response. Many
people, both my seniors and juniors, were extremely enthusiastic about the
podcast. There were meetings and discussions in which the basics were 
fixed---the division of responsibilities: hosting, production, editing, social
media; the basic format; the schedule; and perhaps most importantly, the name.
We also talked to professors and made a list of potential guests.
Finally, we decided to start recordings in March, after our midsemester exams
which were scheduled for the last week of February.

And then, of course, the coronavirus hit.

## Nuts and Bolts

We picked up the project again, almost exactly a year later, in March 2021,
after social distancing norms were relaxed a little by the institute. Student
volunteers fell into two major categories: (1) hosts, who were responsible for
inviting professors as guests and, well, hosting the podcast, and (2) people
responsible for recording, editing and releasing episodes. Before approaching
the Dean of Student Affairs (DoSA) with a proposal, we did the following:

- Hosts approached professors to gauge their interest, and we made a rough
  schedule for recording the first 5--6 epsiodes. We (very ambitiously) planned
  to record every weekend and release an episode every two weeks.
- We decided to hold recordings in the Discussion Hall in the School
  of Physical Sciences (SPS), which was closed at the time due to social distancing
  restrictions. We talked to the SPS Chairperson and got their permission for
  using the Discussion Hall.
- We talked to the Student Gymkhana and the Drama and Music Club to borrow
  their recording equipment (more on this later).
- Finally, we recorded a short intro in the SPS Discussion Hall with the
  borrowed recording equipment to test our record-edit-release pipeline, and
  released it as the zeroth episode on the Atom feed.

After making an intro jingle, a small redesign of the NiSERCast website, 
and getting required permissions from the DoSA, we were ready to start
recording.

A rough format for episodes was decided after a discussion among all
volunteers. To keep the podcast accessible to laymen---especially high school
students who might be considering a career in the sciences---we decided that
each episode should have two hosts, at least one of whom should be from outside
the professor's department. Initially, we decided to let the professor and the
hosts talk for about two hours, which could then be cut down for a one hour
episode. In retrospect, I feel like this was a mistake. With our courseload and
other academic engagements, and having only one group of four people to
look after recordings, editing, and releases, cutting a two hour
conversation down to an hour every two weeks, in addition to supervising the
recordings every week, was just not feasible. To be fair, however, these
glitches would have probably evened themselves out if we were able to do a few more
episodes.

{% include image.html width="wide"
url="/assets/images/nisercast/journey.png" 
  description="From the conception of NiSERCast to the first episode." %}

### Recording Setup

If you have listened to NiSERCast, you may have noticed that it does not sound
like a professionally produced podcast.  However, I am going to describe the
recording setup we used anyway, for reference.

The technical side of things was handled by [Anirudh](http://www.instagram.com/this.is_anirudh/), 
[Jyotirmaya](https://github.com/JeS24/), Spandan and
I. Each of the three participants talked into an Ahuja AWM-490V1 wireless
microphone, whose outputs were fed into [Audacity](https://www.audacityteam.org) 
for recording via a Yamaha MG10XU mixer and a Focusrite 2i2 Scarlett audio
interface. Hosts, professors and the producers also wore headphones to monitor
audio levels. We got the mics, the mixer and a few cables from the Drama and
Music Club, the Focusrite audio interface belonged to me, we asked hosts to
bring headphones, and we had to get things like ¼-inch to XLR cable, aux
cables, and a five-way audio splitter on our own to make everything work.

### Website and Atom Feed

I rewrote the NiSERCast website, more or less from scratch, in March 2021. It is
built on top of Jekyll---which provides an easy templating system and manages
the Atom feed---and is deployed with GitLab Pages while being hosted in a
GitLab repository.

{% include image.html width="wide"
url="/assets/images/nisercast/evolution.png" 
  description="Some alternative covers." %}

For the Atom feed, I started with the basic template that a new Jekyll project
comes with and added extra tags according to 
[Apple's](https://podcasters.apple.com/support/823-podcast-requirements), 
[Google's](https://support.google.com/podcast-publishers/answer/9889544?hl=en) and 
[Spotify's feed requirements](https://support.spotifyforpodcasters.com/hc/en-us/articles/360044440991-Podcast-specification-doc).
To make sure that everything is working as expected before submitting the feed
to Apple, Google and Spotify, I used feed validators at 
[Podbase](https://podba.se/validate/) and
[W3C](https://validator.w3.org/feed/).


### Outreach

After releasing the first episode, we hit a small bureaucratic bump in the
road. As this podcast is an outreach activity bearing NISER's name that is going to be
released to the general public, we were also supposed to talk to the NISER
Outreach Committee and get their permission separately. This could have been
pointed out when we sent our initial proposal to the DoSA, but we caught the Outreach
Committee's attention only after the first real episode was released. The fact
that our first guest, Prof. Varadharajan Muruganandam, is very opinionated
did not help either.

Anyway, after a period of uncertainty, in which we were not even sure that we
would be allowed to continue the podcast, and a few weeks' delay, we got the
clearance to continue as long as we made it clear that the opinions expressed
were personal opinions of the guests and did not represent NISER's views.

## Conclusion

When the second wave of the coronavirus hit, almost all of the volunteers chose
to return to their homes; because of a variety of personal reasons, and
poor management of the pandemic by NISER's administration, we could
not keep producing the podcast. After the campus reopened last December,
Jyotirmaya, Spandan and I were halfway into our final year and were extremely busy
with our master's theses and PhD applications, and it became nearly impossible
for us to organize recording sessions from scratch again.

If you have made it this far into this post: thank you for putting up with my
ramblings. I hope that this has been useful in some way for people who
want to continue the podcast, or who decide to start a similar project at NISER.
All in all, I am extremely proud of what we were able to accomplish while working
with various constraints and limited resources. 
And I must express my deepest gratitude and thanks to everyone involved in the
project.

*[2020]: Ominous music


