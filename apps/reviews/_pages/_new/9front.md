---
layout: newreview
title: 9front
description: The most confusing warrior.
order: 1
icon: "/assets/img/icons/glenda.png"
oldReview: "/old/9front.html"
nextReview: "/new/Haiku.html"
---

# 9front

Challenges:

- Try to browse the internet

9front is an interesting OS, as it’s not UNIX, but sort of takes inspiration from it. It’s based on Plan 9, and because it’s developed by mainly cat-v purists, not a lot has changed in the fork. Unlike Ubuntu from Debian or Shrine from TempleOS, 9front is only interested in the upkeep of security (TLS updates and whatnot) and adding more hardware support. The developers are known to be a toxic group, but I’m not interested in that, I’ll stick with the technology.

{% picture jpt-webp /assets/img/new/9front.jpeg --link /reviews/assets/img/new/9front.jpeg --alt Cirno, a mascot of 9front. %}

Installation starts out weird, but not really hard, if you’ve ever used fdisk, you should be able to get around, Plan 9 was definitely opportunistic, as every single time you boot it, it starts out with asking if you want to boot from your hard disk or network. Since I was using Wi-Fi, I couldn’t really do a lot of the early networking stuff.

Not sure what networking stack does 9front use, but to get my Wi-Fi card to work I had to place OpenBSD firmware files. Thankfully I never deleted them.

To get you in the mind of Plan 9, here are the steps to some procedures that were required to get this far:

**Mounting a FAT32 USB stick**

1. Find the data offset using fdisk
2. Mount a dosfs service with this offset
3. Mount the service as a folder

**Connecting with Wi-Fi**

1. Bind `#l1` (whatever that means) to `/net/ether1` (this is still your Wi-Fi card, not Ethernet).
2. Use `aux/wpa` to establish a WPA2 connection (I did not have success with 5GHz, it may be limited to 2.4)
3. Use `ipconfig` to get yourself an IP address.

Not very point-and-click. But, this is what you get into when the interface of your OS was primarily designed by and for developers. Oh, and on the interface...

## rio

It’s actually... cool? I do like the way that it looks, but I absolutely am baffled by the way that it actually works, as it flips everything on its head.

1. There are no application windows. Every application takes over the current window. This means that the only thing you can launch is a terminal, then you run a command in the terminal and that’s now the application.
2. It uses all three buttons of your mouse. Sometimes you can get away with two, but if there are any menus, then those menus are primarily made out of text, you can write anything you want in there, you use the middle button to do anything in said menus.
3. It’s still a stacking window manager. Seethe.

It makes for a very hostile, but unique experience. I am unsure how would you even be able to learn it, however, as the mouse drivers are total crap.

## the terminal

Everything you knew about UNIX, you can throw out half of it.

1. Applications inside folders. I do not know how PATH works, or even if it exists, but quite a lot of times you’ll use `x/y` to launch anything. Like `games/klondike` or `net/ping` or even `git/clone`.
2. All keyboard shortcuts - gone. The up arrow? No, that’s supposed to be `^”`, but never worked. `^C`? No, that’s DEL. (Finally, a key that Rossmann uses!) `↹`? Nope, Try `^f` instead. Sure, you’ll get used to them after a while, but it does raise a question. Why? UNIX has worked for years, why change it?
3. Autoscrolling? lol

## hardware

Yeah... no. It works best on old Thinkpads, and even then, select ones. And afterwards, you’ll find that it’s still not amazing. No graphical acceleration (obviously, right?) and the lack of any thermal information makes it really unpleasant to use, as you can play solitaire and your fans are still at a good 50%. Hell, even at idle.

## software

Again, not quite. Now, it was even worse for me, because the repository didn’t work. It was some weird error that made it completely unusable, so I was stuck with compiling my own programs from git. Which isn’t a lot. Actually, it’s quite laughable, really. That’s because Plan 9 was never made to be portable. I don’t even know if it’s POSIX level of portable, considering nearly all software (apart from Python 2.7 and Go) is first-party, only for Plan 9. Which, I guess it’s better that way, because I have no idea how Qt or GTK would even be supposed to look on this mess.

## the challenge

Immediately, hopes are next to null. IRC client is included OOTB, but it might as well be not, it’s only some weird script that does a couple of TCP connections back and forth. You’ll read all your messages twice. XMPP I was able to compile, and after quite a lot of tries, it worked, but now instead of reading your messages twice, you won’t even read them. They don’t appear at all. However, the world wide web, can it redeem itself there?
No. Two browsers are pre-loaded. Mothra and abaco. Mothra is totally unusable, abaco loads... something. Both of them were written as jokes and abandoned. No CSS, no JS, and not even full HTML support. My site loads, but I cannot say the same for others. I was able to complete the Google consent form... somewhat, but that was it. Quite a few sites load totally nothing, even if they’re a raw text file. Yeah, not good, not good.

## conclusion

{% picture jpt-webp /assets/img/new/9front-1.png --link /reviews/assets/img/new/9front-1.png --alt Rio desktop with output of 9fetch, the IRC client and Abaco browser displaying C# source code from GitHub. %}

It was unusable then, and it is unusable now. Truly, I didn’t expect much from it, since this is more or less made to be a joke. It’s interesting if you want to look at how the creators of UNIX thought the next step for UNIX evolution would look like, and, as much as I hate UNIX and its philosophy, I couldn’t be more glad at the scale they were wrong at.
