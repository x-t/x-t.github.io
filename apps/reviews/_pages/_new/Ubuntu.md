---
layout: newreview
title: Ubuntu
description: Still the champ.
order: 7
previousReview: "/new/Arch_Linux.html"
oldReview: "/old/ubuntu.html"
nextReview: "/new/Debian.html"
icon: "/assets/img/icons/ubuntu.png"
---

# Ubuntu

Challenges:

- Compile ReactOS
- Try installing Unity

From Arch to Ubuntu, probably its best-known archnemesis. I always saw Ubuntu as the fits-all solution. With PPAs and firmware, better software updates it was the ultimate server and desktop distro. That is until I realised that Debian works better on servers and that Fedora was better for desktops. Also, Ubuntu is probably known best for its amount of controversies and foolish decisions. Let’s remember a few

- Unity - controversial, yet the best DE ever made
- Unity 8 - what the...?
- Mir - weird X11 replacement, which now lives on in IoT
- Amazon integration - oh, yikes
- Snap - they’re still trying to push it when Flatpak’s winning. lol

Maybe there are a few others, but these are the ones I remembered off the top of my head. Anyway, let’s goooooo.

## challenge 1: reactos

What happened to apt?!?

{% picture jpt-webp "/assets/img/new/Ubuntu.png" --link /reviews/assets/img/new/Ubuntu.png --alt Ubuntu/GNOME desktop with terminal output showing apt wanting to delete all (1433) packages. %}

Why does installing gcc uninstall the entire system? Who designed this? Who maintains these packages? Do they have ANY, like ANY form of CI? Does anyone run a test now and again? How is this allowed???!!!!????O h no, it’s not an outdated system, it’s up to date. Up. To. Date. Every single package. And somehow gcc, one of the most prominent packages to exist, depends on its own base, which is installed too new by default, and downgrading it will literally uninstall 1433 packages. What.

Well, then. I guess don’t even bother with the new releases. Go with LTS, because this is borderline unacceptable.

But a challenge is a challenge, therefore we’re going to use Docker.

{% picture jpt-webp "/assets/img/new/Ubuntu-1.png" --link /reviews/assets/img/new/Ubuntu-1.png --alt Terminal output showing that ReactOS is compiling. %}

The container is still Ubuntu, by the way. It’s the LTS release, not the up-to-date one. Its’ main selling point is not having broken repositories.

{% picture jpt-webp "/assets/img/new/Ubuntu-2.png" --link /reviews/assets/img/new/Ubuntu-2.png --alt ReactOS running inside a KVM virtual machine. %}

There you go, ReactOS LiveCD, built in Docker, run on KVM. Spicy.

## challenge 2: unity

Once again, I was met with the “apt being bad” meme. But at this point, I was beginning to be suspicious of the mirrors themselves. So I switch out whatever meme of a mirror was hosted in Lithuania with a German one. And guess what, it immediately worked. I know, shocker, but it genuinely makes me wonder why would a broken mirror **by default** even be allowed?

{% picture jpt-webp "/assets/img/new/Ubuntu-3.png" --link /reviews/assets/img/new/Ubuntu-3.png --alt Ubuntu/Unity desktop showing the output of neofetch. %}

Wow, this brought me back. Back to a better time. Unity was genuinely great, but it’s aging. I was barely able to install it as some weird apt bug was failing on the last package, but didn’t seem to affect much. Also it does glitch out and something in the background keeps crashing.

I haven’t touched Ubuntu Unity since Big Sur came out, but if you want to run Unity, you should try that instead. However, with lack of maintenance towards it, the fact that it seems to be run a literal 12 year old who keeps putting as much weight on his shoulders as possible, I am unsure how long will it go until the realisation hits that not even Canonical’s money was able to save Unity, so why would some ambitious kids be able to do it?

Considering the developments towards Wayland, GNOME and MATE, I personally would stick with those, however great Unity was, and to an extent, still is. Personally, maybe I’ll give Ubuntu Unity another shot, if they’ve ironed out the bugs over the year, but I won’t review it, as I would prefer to ignore spin-offs. Well, with the exception of this, obviously, as Ubuntu is a spin-off from Debian, but other than some core shared, they’ve definitely grown up to be way different from each other.

## conclusion

What a rollercoaster. From questionable Canonical choices, to questionable repositories this was definitely not the slam-dunk I though I’d have to write about. Still though, if you’re in a region with good mirrors, I wouldn’t worry about any of this. If you can bare Ubuntu, then maybe you should run it. But personally, I don’t think I can bother with Ubuntu anymore, as there are other great things. Yet, I have to say that as a first distro, it’s genuinely great. The GNOME install has quite a lot to help you more easily transitioned to the very different lifestyle of Linux, unlike something like Fedora that will throw you in the most vanilla state and say “go figure it out”.
