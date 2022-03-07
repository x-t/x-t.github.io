---
layout: newreview
title: Arch Linux
description: An old friend.
order: 6
previousReview: "/new/Windows_7.html"
oldReview: "/old/arch.html"
nextReview: "/new/Ubuntu.html"
icon: "/assets/img/icons/arch.png"
---

# Arch Linux

Challenges:

- Rice, rice, rice!
- Tiling window manager!
- Make a local webdev setup (VSCode, npm, etc.)

Oh, Arch. It was one of the first distros I tried, and it was absolutely a brain teaser. I installed it immediately on my first personal laptop, to be left with a year of frustration and completely shattered expectations. With total hardship I experienced, I ended up badmouthing Arch every single time I could, especially after I switched to Debian. “Oh you poor sods, here I am on my stable distro, enjoying life”, of course, ignoring the fact that I was using Debian unstable, unstable being literally in the name. Running every apt update with --dry-run, to check if it didn’t delete X11 server again.

I like to think that nowadays I don’t completely hate Arch. Though, to be honest the only thing I like about it is the fact that it uses systemd. It’s already hard enough to maintain Arch bare, I laugh at every guy and gal that has to do the same without systemd. **I will not touch the systemd-free forks of distributions.** Now on to the installer.... or lack thereof.

## software

pacman is an interesting package manager. That’s all I can say about it. I can’t speak of its reliability because my knowledge of its reliability (or strictly speaking, lack of it) is many years old and might have changed. Remember these reviews aren’t long-term, I cannot say “how reliable will this be in 2 weeks/8 months/3 years?”, I can only say how I felt going through it and how hard was it to complete the challenges, which evidently I come up with. One other thing I’d like to add is that Arch doesn’t have anything what you’d call “PPAs”, as all of its’ contributed software is stored in a centralised location, AUR, for which you’ll use an entire separate package manager for, not add it to the existing one.

## challenge 1: rice

I ended up picking out Tilix as my terminal emulator (yeah, I know, I am not going to mess with the minimalist terminals), Sway as the window manager (Wayland > X11 FTW), Waybar as the... bar and GDM as the display manager (I do NOT want it to start from my zshrc).

{% picture jpt-webp "/assets/img/new/Arch Linux.png" --link /reviews/assets/img/new/Arch Linux.png --alt Arch Linux desktop as described before, with output of neofetch. %}

Honestly, I ended up semi-satisfied by it. It brought me back to a time when I used i3 and didn’t have a care in the world for things having to work, not wanting to reinstall my OS every 3 days, etc. It works well and I’m sure that Wayland was no small part in the fact of how painless it was to set up. No DISPLAY parameters, no Xorg.conf, etc. Still though, nowadays I’d pick GNOME on Wayland, because I don’t want X11, but I also really don’t want a tiling window manager...

## challenge 2: webdev

{% picture jpt-webp "/assets/img/new/Arch Linux-1.png" --link /reviews/assets/img/new/Arch Linux-1.png --alt A full-screen screenshot showing tiling of Visual Studio code (showing Typescript source code with a terminal that's running a development Node server) on one side, with Firefox on another. %}

I mean, what can I say, it works. Get VSCode from AUR, Firefox and you’re off to the races. I definitely was thinking of something else when I wrote that one down.

## conclusion

Interestingly enough, this was sort of painless. Nearly everything worked fine out of the box, unlike with Void. All that was needed was some configuration changes, like settings up Sway and whatnot. But Wayland, Pulseaudio, NetworkManager all worked perfectly fine. The speed of the thing is also really incredible.

I still don’t really understand the true point of Arch, as in my opinion other distributions can also do the whole “minimal setup” thing from Fedora Core to Debian with “desktop environment” unchecked. But I guess if it works, it works. I really don’t have any reason to hate it.
