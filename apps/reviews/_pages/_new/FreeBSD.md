---
layout: newreview
title: FreeBSD
description: A misunderstood old man.
order: 3
previousReview: "/new/Haiku.html"
oldReview: "/old/freebsd.html"
nextReview: "/new/Void_Linux.html"
icon: "/assets/img/icons/freebsd.png"
---

# FreeBSD

Challenges:

- Set up the Linux emulation layer (the FreeBSD subsystem for Linux :p)
- Try out bhyve (the alternative to KVM)
- Try out jails (like Docker or LXC)

Oh man, FreeBSD, definitely one of the most interesting operating systems still around. It powers a whole lot, from Netflix’s infrastructure, to all Playstations (>3) and even parts of macOS. BSD are the pioneers of the permissive license, allowing the commercial use and closed-source forks of code, which does put quite a lot of questions on the software freedom scale, but absolutely crucial for today’s world. Also the pioneers of LLVM, the best compiler infrastructure to date.

First thing in the installer you’ll be asked is what filesystem do you want to use. There’s ZFS and UFS. I chose UFS, because the recommended amount of RAM for ZFS is 8GB. That’s... a lot, however, ZFS is a complex filesystem, so no real wonder there. I looked through the guide to optimise it, but I didn’t really understand anything, so I decided to go with UFS. After booting, you’re greeted into a tty. There’s nothing special here, you have some networking and a package manager. I ended up installing MATE, for no real particular reason, other than the fact that every single time I installed FreeBSD I used XFCE, and I didn’t want to do the same anymore.

## the terminal

Oh man, I love BSDs. They’re about what you’d expect from Linux, but end up being very different anyway. For example, rc.conf is something that exists on Linux, but you never edit it, or boot.conf, which is a whole another way to think about kernel extensions. It’s not like 9front to freak you out as nothing you remember works anymore, it’s pleasantly different, making you think outside the box, get outside of the Linux comfort zone. Get through the fact that the package manager won’t do your dirty work for you, that you’ll have to edit fstab yourself, that you’ll have to figure out how to set up the service yourself, etc. It’s fun to mess around with, but I don’t believe it’s that much better if you’re an administrator. Now in a way, it’s good knowing what’s actually being done step-by-step, you’re not going to linger on some dependency enabling some kernel extension for no reason, as that’s something that has to be done by hand, but we lived with Linux doing that all these years and things are still fine?

{% picture jpt-webp "/assets/img/new/FreeBSD.png" --link /reviews/assets/img/new/FreeBSD.png --alt FreeBSD/MATE desktop showing output of neofetch and a censored Signal CLI window. %}

## hardware

Hardware support for FreeBSD is good, not great. That’s all I can say. Idle fan speed still not great, but I didn’t really expect a lot. Mouse acceleration is abysmal, 5GHz doesn’t work, etc. For all it is, it’s fine. If you pick out your hardware or be able to live with some compromises (like 2 minute battery life) then you might as well put this as a daily driver. Well, as long as....

## software

A trend that I have not accounted for since 2017 is the explosion of Electron, a GUI framework that uses a Chromium backend. It’s known as the fastest and simplest way to add “portability” to your code, but what’s overlooked is that the portability they’re talking about is only 3 players. Windows, macOS and Linux. Nothing else is really supported. FreeBSD is putting some effort in to get Electron apps ported, but it does still seem to be in its early stage. So far from what I’ve seen, VSCode has been ported, but no real chat apps. But other than that, a lot of open source software has been ported and is kept up to date, well, sometimes, there are quite a few ports that are not maintained... this will come to bite in the bum later. Still though, if it works on Linux (and isn’t Electron), you can probably count on it working on FreeBSD too. Natively.

## challenge 1: linux

Natively... natively.... natively.... Oh yeah, let’s not do that. Let’s run it on Linux instead! FreeBSD (and it seems to be other BSDs for that matter) had WSL before WSL, full syscall support for Linux binaries. FreeBSD’s Linux layer is based on CentOS 7. This means that nothing works. I tried installing Signal on it. It didn’t go well. In fact, it straight up didn’t work. The version of glibc was way too old. So is CentOS in general. I tried to get wine then running, turns out the 64-bit port is abandoned and the 32-bit port doesn’t run Signal, because Signal doesn’t run on 32-bit. It took several hours out of my life to figure out that CentOS 7 is seriously ancient. And also how demanding Electron really is.

## challenge 2: bhyve

{% picture jpt-webp "/assets/img/new/FreeBSD-1.png" --link /reviews/assets/img/new/FreeBSD-1.png --alt Terminal output showing 'vmx_modinit: processor does not support desired primary processor-based controls' %}

Unsupported CPU. Moving on.

## challenge 3: jails

{% picture jpt-webp "/assets/img/new/FreeBSD-2.png" --link /reviews/assets/img/new/FreeBSD-2.png --alt FreeBSD with two terminals, one on the left showing neofetch output for the X200 laptop, one on the right showing neofetch output for a FreeBSD jail. %}

Okay, this is actually interesting. This is definitely one of the best features for FreeBSD, they’re definitely like Linux containers, but very flexible, and also, you install the full distribution on it, with an installer, not even an image. Other than that it’s a cool feature, I don’t have much to say for it. It’s FreeBSD inside FreeBSD. If you’ve ever opened up Docker in your life, you’ve seen it. Nothing spectacular, is it.

## conclusion

FreeBSD is definitely undefeated. It’s definitely an interesting thing to administer, but time and time again it’s proven to be not as good as Linux. Unless you have really, really weird licensing issues not allowing you to use it, then you should use Linux instead. KVM, systemd, yum, apt, LXC and Docker are seriously lightyears ahead and way more funded/developed. And not to mention, if you’re only trying to learn, it’s a whole lot more useful to have Linux than FreeBSD knowledge, because you’re not really getting a FreeBSD job, are you...
