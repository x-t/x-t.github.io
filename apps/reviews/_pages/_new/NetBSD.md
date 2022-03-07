---
layout: newreview
title: NetBSD
description: Long ways to go.
order: 15
previousReview: "/new/Chromium_OS.html"
nextReview: "/new/Windows_XP.html"
icon: "/assets/img/icons/netbsd.png"
---

# NetBSD

Challenges:

- Not too sure. I never even tried it.
- Run a Minecraft server

I know nothing about NetBSD. Like, I’ve heard the name several times, but literally no one goes for it. OpenBSD is far more popular and it’s way unpopular compared to Linux. All I remember is this thing runs on toasters.

{% picture jpt-webp "/assets/img/new/NetBSD.jpeg" --link /reviews/assets/img/new/NetBSD.jpeg --alt Picture of toaster with a display with NetBSD. %}

_No, seriously._

So, I have no expectations, other than completely deadbeat drivers. Truly, an unbiased review for once.

## installer

It’s actually nice. I was pleasantly surprised. It reminded me of the FreeBSD installer, but FreeBSD is a lot more functional. No Wi-Fi support, but, I don’t blame it that much.

## hardware

Through some wpa_supplicant magic, I was able to get 5GHz Wi-Fi to work out of the box.

Can you read that? 5 GHz. Actually 5 GHz. I couldn’t even get that on FreeBSD and that supposedly has better drivers. What is happening in the land of NetBSD?

## does it work?

This... no.

It can’t start its init system (error 22).
Went so far but did so little.
I can’t even find anything on Google for this, so I’ll try it on a virtual machine instead.

## virtual netbsd

{% picture jpt-webp "/assets/img/new/NetBSD-1.png" --link /reviews/assets/img/new/NetBSD-1.png --alt NetBSD installer. %}

_Once again, I am on Parallels. FreeBSD preset._

{% picture jpt-webp "/assets/img/new/NetBSD-2.png" --link /reviews/assets/img/new/NetBSD-2.png --alt NetBSD/XFCE desktop. %}

_The desktop works exactly the same as in OpenBSD._

## the challenge

{% picture jpt-webp "/assets/img/new/NetBSD-3.png" --link /reviews/assets/img/new/NetBSD-3.png --alt NetBSD desktop with an attempt at startin the Minecraft server ending with output 'cannot open shared object file: No such file or directory' %}

_Yeah that’s not gonna work out._

## conclusion

Surprising, yet disappointing. Again, I did not expect a lot, this is a distro for toasters afterall. OpenBSD is a better bet if you really want to be out of the computing loop, but maybe... use Linux? Throwing a suggestion.
