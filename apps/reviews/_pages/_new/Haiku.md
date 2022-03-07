---
layout: newreview
title: Haiku
description: A light at the end of the tunnel.
order: 2
previousReview: "/new/9front.html"
oldReview: "/old/haiku.html"
nextReview: "/new/FreeBSD.html"
icon: "/assets/img/icons/haiku.png"
---

# Haiku

Challenges:

- Try some games!
- Browse the internet

For some backstory, Haiku is a fork of Be OS, a failed project. That’s all you get. I have to be honest, I am not totally blind about it. With a corner of my eye I still watch its development progress and I have actually used it not that long ago to try and port OpenRCT2 to the platform, that didn’t actually end well, I couldn’t do it, but still, I keep up with it, as I truly believe that it has enough momentum to be an interesting alternative. Now, of course, you have to be realistic, it’s not a server OS, it’s a desktop OS and with the fact that for many years now Linux, however popular it is, still hasn’t actually made a dent, but rather a scratch into the desktop market, still, it would be very cool if it even reached the level of FreeBSD (or GhostBSD or TrueOS) as an alternative. But, wishful thinking aside, how is it now?

Now, I know I’m on an SSD, but the installation speed... it’s incredible. Installs the full install (which isn’t only a minimal GUI) in less than 20 seconds. You could probably fit in 10 if not 30 installations of Haiku compared to Windows Server Core or Debian on an SSD, with a top-class CPU from USB 3. And in fact, Haiku is A-tier speed in general. Boots faster than anything I’ve seen, the POST screen takes longer than the Haiku boot splash, it’s actually incredible what they’ve done.

## gui

I like it. I like it a lot. I think it’s the best interface that has been made for computers, I find it up there with the old OS X Aqua interface. Has it aged? Yeah, sure, it’s a bit old, considering there haven’t been many if any changes since the original Be idea. But it still looks and functions amazing. The one thing that hampers it down is the lack of GTK support, which means that a whole lot of apps will not work, and I do not know if they will ever work, considering how much of a mess GTK is. It’s still a total hassle to mix Qt and GTK applications in any Linux DE and they have several times the monetary resources. I really cannot wait for HiDPI support, I want to see Haiku through a display that’s not garbage and have it be not blurry. One other thing I have to commend is the fact that they use macOS-like keyboard shortcuts. I have a certain disdain for the `^` key and they make use of `⌥` (alt), which is absolutely the way to go.

## hardware

From what I understand the networking stack is straight up ripped from FreeBSD, which from what I see is smashing records with help from Netflix. I only tried one Wi-Fi card, an old Intel one and it worked flawlessly, so, if your stuff works on FreeBSD, it’ll work well on here too. Like 9front, however, idle resource management seems to be bad too. Not pleasant running fans at idle. Also, no power states, forget sleep. I’ll talk about the graphics drivers later.
_Sidenote: hardware/software security. No full-disk or partial-disk encryption is supported. Single user only. (i.e. no permission elevation (UAC, sudo, doas))_

## software

It’s definitely interesting. As mentioned in the previous review, it supports Qt, but it also has its own stack of graphics. This means that there are quite a few applications written natively for Haiku, but also quite a few ported over from KDE. Considering both are actually quite aplenty, you’ll find some interesting mixes of software. Such as OpenShot, LibreOffice and Krita. Quite a few games in the repository too, but there is definitely a lack of browsers, as QtWebEngine isn’t ported (more on both in challenges). As I have tried porting OpenRCT2 (_SDL, no acceleration, no netcode_) I actually have some minimal inside knowledge, and it’s genuinely hard, because Haiku sometimes isn’t as focused on portability as its own philosophy. As sometimes they think some POSIX behaviour is a bug, not a feature, making porting harder than it really needs to be. I may revisit it one rainy day, but as of yet, I still cannot be bothered.

## challenge 1: games

One surprising thing that Haiku has is quite an awesome game collection. Mind you, all of it is open source so if you’re a gaming gamer gamery gamer you can go back to Steam and continue eating your own snot. Otherwise, there’s Quake 2, GZDoom, quite a few of first-party development titles (a lot of them puzzle or kids’ games), OpenTTD (probably the best game on there) and the entirety of the Tux games collection. 2D titles work fine, and on that, there’s a free copy of VVVVVV, only on the Depot. But for 3D, hold your horses. The graphics drivers are not in yet, there is no graphical acceleration. Apart from the screen tearing you’ll experience in the desktop, you’ll also experience some abysmal performance. I tried Minetest which was totally unplayable and SuperTuxCard which took a solid 5 minutes to complete a quarter of the underwater track at 3-5fps (there’s no counter, I counted the frames myself, it’s that bad).

## challenge 2: www

As I said, there aren’t many browsers. In fact, if usability is a factor, then it’s one. It’s WebPositive. Based on WebKit, I’m amazed they are still continuing it instead of trying to get QtWebEngine to work, because WebKit is definitely Apple’s kid and very weird outside Safari. Still, it does actually support web browsing. Now, I didn’t go far, I saw the bug that made it crash while playing YouTube videos has been fixed, but now there’s a much worse issue, as the WebAssembly interpreter makes the browser crash (latest nightly), which considering how prevalent it is nowadays, everything from AWS to hCaptcha crashes. Which puts it in a weird situation as you can’t even report bugs to Haiku as you can’t register an account without the captcha. Oh well, one day it’ll be fixed, I’m sure of it. But even after that, there’s still quite a lot of the way to go to full usability. And from what I read online, WebKit might be not too bad of choice to continue improving, as Apple puts quite a lot of deal to optimising it, and if Haiku manages to harness this optimisation, it definitely won’t end up as another Internet Explorer.

## conclusion

{% picture jpt-webp "/assets/img/new/Haiku.jpeg" --link /reviews/assets/img/new/Haiku.jpeg --alt Picture of the X200 laptop with Haiku desktop showing neofetch output. %}

It’s not a daily driver yet, and in fact, it’ll be quite a few years until it actually becomes one, but instead of advising the immediate retreat and surrender to Linux, I think it should continue. Go port software, go join their hackathon, go donate a dollar, go join GSoC, this might actually go somewhere.
