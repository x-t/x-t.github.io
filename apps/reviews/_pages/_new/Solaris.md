---
layout: newreview
title: Solaris
description: Oracle's poo-shaped surprise.
order: 17
previousReview: "/new/Windows_XP.html"
nextReview: "/new/Windows_11.html"
icon: "/assets/img/icons/solaris.png"
---

# Solaris

Challenges:

- Install it? I never tried it on real hardware.
- Set up a web server
- Run an ioquake3 server

I only installed Solaris in a virtual machine. All I know is it’s sort of like OpenBSD but with Oracle’s whole charade. Considering this is a distribution for real enterprise boys and girls, I wonder if it will even bother to install on hardware this old. It could very well output “unsupported CPU” like ESXi.

In fact. It was more embarrassing than that. It threw me into system maintenance mode. This meant that it was royally screwed up. And I have to use a VM again. I’m genuinely tired of some of these OSes working so bad. I genuinely can’t even run them on 10+ y/o hardware.

{% picture jpt-webp "/assets/img/new/Solaris.png" --link /reviews/assets/img/new/Solaris.png --alt Solaris TTY installer with a really terrible Times New Roman-like monospaced font. %}

_It is genuinely revolting to look at._

{% picture jpt-webp "/assets/img/new/Solaris-1.png" --link /reviews/assets/img/new/Solaris-1.png --alt SPEED: 302k/s %}

_Repositories on fleek._

## the challenge

Nothing is in the repositories. I found http://unixpackages.com but that requires actual payment to use. Hell no.

{% picture jpt-webp "/assets/img/new/Solaris-2.png" --link /reviews/assets/img/new/Solaris-2.png --alt gcc failure with some C errors %}

_nginx doesn’t compile_

{% picture jpt-webp "/assets/img/new/Solaris-3.png" --link /reviews/assets/img/new/Solaris-3.png --alt Safari window with a heading reading 'whoa' %}

{% picture jpt-webp "/assets/img/new/Solaris-4.png" --link /reviews/assets/img/new/Solaris-4.png --alt Screenshot of the running Python3 module http.server %}

_Yeah, I cheated._

{% picture jpt-webp "/assets/img/new/Solaris-5.png" --link /reviews/assets/img/new/Solaris-5.png --alt make output from compiling ioq3 %}

_Compiling ioq3._

{% picture jpt-webp "/assets/img/new/Solaris-6.png" --link /reviews/assets/img/new/Solaris-6.png --alt gcc error saying 'Architecture not supported' %}

_Yeah I’m done here._

## conclusion

{% picture jpt-webp "/assets/img/new/Solaris-7.png" --link /reviews/assets/img/new/Solaris-7.png --alt Terminal showing Solaris neofetch output %}

Well. It doesn’t even have a 64-bit version.

Why would you ever build your business on this? You must be absolutely braindead!

This is the worst UNIX, full stop. A whole bunch of proprietary crap, mixed with no software, whatever is in the repositories is totally outdated and it’s made solely for an architecture that absolutely sucks.

Install RHEL. Seriously. Even FreeBSD is better than this. Hell, even Oracle provides Oracle Linux. A way better solution than whatever the hell this is supposed to be. It’s clear that not even Oracle cares about Solaris, as the latest version of Java available on here is 8. EIGHT! That is woefully outdated, and it’s first-party.

Don’t bloody bother.
