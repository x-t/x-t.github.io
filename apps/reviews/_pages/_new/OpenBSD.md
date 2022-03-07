---
layout: newreview
title: OpenBSD
description: What a pile of...
order: 10
previousReview: "/new/Solus.html"
nextReview: "/new/Fedora.html"
icon: "/assets/img/icons/openbsd.png"
---

# OpenBSD

Challenges:

- Compile Go code
- Cloudflare tunnels?

OpenBSD is interesting in the way that I believe it genuinely has a cult following. Not in a good way, like, a literal cult.

I couldn’t install it.

- I can’t install file sets because they’re not included in the install
- I can’t download the file sets because the Wi-Fi firmware isn’t included
- I can’t get the Wi-Fi firmware because I can’t mount my SD Card as OpenBSD recognises it as “sd2” and doesn’t allow me to mount it

Due to these issues, this review was done on a Parallels virtual machine, not bare metal. (I seriously can’t be bothered to fix it to run on real hardware).

{% picture jpt-webp "/assets/img/new/OpenBSD.png" --link /reviews/assets/img/new/OpenBSD.png --alt OpenBSD installer. %}

_A fun way to get your battery drained!_

{% picture jpt-webp "/assets/img/new/OpenBSD-1.png" --link /reviews/assets/img/new/OpenBSD-1.png --alt OpenBSD/XFCE terminal saying 'Premature end of archive' %}

_I’m genuinely not even surprised._

The solution to that above is to retry the command several times. Yeah, I swear, that works. I’d die laughing if on Debian I had to run apt in an infinite loop until it exits with 0 to install apps. Truly hilarious.

{% picture jpt-webp "/assets/img/new/OpenBSD-2.png" --link /reviews/assets/img/new/OpenBSD-2.png --alt XFCE display settings showing one unknown display at 1920x1200 0Hz with auto-detect scaling. %}

_I know HiDPI support is sort of hard, but this.... this is funny._

Yeah, forget the GUI here. It’s absolutely unusable. I’m not gonna chalk it down to only OpenBSD’s fault here, as this is a virtual machine, and it doesn’t have a driver. But also the preset I used was for FreeBSD, so it’s probably already at the lowest denominator. And I’ve genuinely seen better raw unaccelerated VESA drivers than this. Good grief.

{% picture jpt-webp "/assets/img/new/OpenBSD-3.png" --link /reviews/assets/img/new/OpenBSD-3.png --alt OpenBSD TTY showing neofetch output. %}

_Comes with tmux by default... That’s cool... I guess._

## the challenge

{% picture jpt-webp "/assets/img/new/OpenBSD-4.png" --link /reviews/assets/img/new/OpenBSD-4.png --alt OpenBSD installing the Go compiler/tools. %}

_Huh. I probably should’ve expected it, this compiler works on Plan 9._

{% picture jpt-webp "/assets/img/new/OpenBSD-5.png" --link /reviews/assets/img/new/OpenBSD-5.png --alt gmake from the cloudflared project outputting 'This system's OS openbsd isn't supported' %}

_Alright. I’m not going to port it. There was a question mark in the challenge for a reason. Goodbye._

{% picture jpt-webp "/assets/img/new/OpenBSD-6.png" --link /reviews/assets/img/new/OpenBSD-6.png --alt Terminal output showing my guestbook project compiled and running. %}

_Well, I compiled my own code. That works. Great._

## conclusion

Honestly, I never got OpenBSD. Maybe it’s people’s ambition for the “old UNIX” or something. It’s different in essentially every single way. And none of them really good.

I love how dedicated the community can genuinely be. This stuff barely supports a C2D ThinkPad and they’re putting it on and writing drivers for 2020 Huawei laptops, M1 even.

It’s raw ambition, but it also shows raw ambition as the whole column of “Works?” being filled with “yes” doesn’t include “, but like crap". For a community effort, it’s definitely not bad. They get seriously zero support. No real operating systems copy off OpenBSD’s stack, unlike FreeBSD which at least has some crap trickle down on it once every 2 years, everyone only copies a whole lot of OpenBSD’s projects.

OpenSSL, OpenSSH - 2 of the library that’s now the de-facto standard, right out of OpenBSD. What’s the third one... oh yeah, KRACK[1]. Ouuugh, no that’s a bad one, scratch that.

Still though, you do have to hand it to them, it’s one hell of a community, that’s definitely more interesting than 9front or something, with way better contributions, but their main product is just... boring, not interesting, uninspired, bland, beige, useless, etc.

Stick it on your hardware, watch it go, pay your respect and then... install a good OS.

[1]: I feel like I have to clarify this: OpenBSD didn’t invent KRACK. It was discovered using OpenBSD’s source code. It’s a fault with every WPA implementation, not OpenBSD.
