---
layout: newreview
title: Windows XP
description: Going beyond the grave.
order: 16
previousReview: "/new/NetBSD.html"
nextReview: "/new/Solaris.html"
icon: "/assets/img/icons/windowsxp.png"
---

# Windows XP

Challenges:

- How usable is it now?
- Can you administrate UNIX-like systems with it?
- Can you administrate Windows systems?

The nostalgic son of a bitch. It’s fair to say that at this point, it’s truly dead. It has been 5 years since the EOL date, all applications have dropped its support, with only community efforts remaining.

But still, even with that, it’s still regarded as one of if not the best operating systems in the world, with some people still holding beliefs of its usability to this day. Think of the Windows 2000 crowd, for example.

Personally, I still fire it up from time to time, not only for nostalgia purposes, but also, if I can run an application in XP, I will. Because it’s the lightest on the resources and disk space. However, I haven’t run it properly on bare metal for quite a few years, and there are reasons for it, chief of which:

## drivers

XP has no Windows Update drivers. You have to hunt them down yourself, and on hardware which is stuck on with Windows 7 product key stickers, that’s pretty much impossible. The X200 which I am using here, will have drivers. For the 32-bit edition, however. I ran Server 2003 here not so long ago and 64-bit XP drivers for the X200 don’t exist. But XP for all purposes, should be fine.

## installation

We start off with the fact that Windows XP installers do not like USBs, you need separate utilities that would allow you to change the image in a way that not only can boot the installer, but also that the installer works. With the Server 2003 install I mentioned, I spent nearly half a day trying to get it to install from an USB.

For some reason, it took 4 hours for it to finish the initial copying files step. No idea how these things happen.

For piracy purposes:
https://archive.org/details/xppro2020

`F6HQW-Q3799-9CJXR-9P3YD-6CJJ6`

Also, for some reason, my main drive letter became D:\
I tried to change it, but I ended up bricking my installation.
I’m sure that’ll never cause me problems later on.

{% picture jpt-webp "/assets/img/new/Windows XP.png" --link /reviews/assets/img/new/Windows XP.png --alt macOS file move dialog showing 'Moving 40 items' '23.7 MB of 759.3 MB' %}

_I didn’t really look at what drivers I was downloading, I saw “Windows XP” and grabbed it. I guess due to the unpopularity of Vista, nearly all drivers have an XP version attached, too._

After installing all of the drivers, I decided to take it slow, not rush, and install some utilities to get me into that XP workout.

## the challenge

The first thing I needed was SSH. It’s included with Git for Windows, where you can find an old version to install on XP.

{% picture jpt-webp "/assets/img/new/Windows XP-1.png" --link /reviews/assets/img/new/Windows XP-1.png --alt A terminal window showing macOS neofetch over SSH %}

_macOS on SSH._

{% picture jpt-webp "/assets/img/new/Windows XP-2.png" --link /reviews/assets/img/new/Windows XP-2.png --alt Two terminal windows showing Server 2022 winfetch and Red Hat neofetch over ssh. %}

_Yes, you can administrate modern systems on Windows XP!_

I did not try RDP with Windows Server, because frankly, I don't care. Use SSH, wimp.

## conclusion

{% picture jpt-webp "/assets/img/new/Windows XP-3.jpg" --link /reviews/assets/img/new/Windows XP-3.jpg --alt Windows XP desktop with winver. %}

Well, it’s interesting. XP can still do stuff. But I’ll be honest, the latest version of New Moon doesn’t support the internet really well. It is a miracle I was able to find all the drivers for it. And this hardware is seriously too good to only run XP.

Whatever XP does now, it won’t do in 2-3 years and Linux does more now and will do even more later.

I’ll still keep it for nostalgia purposes, or when it fits the job, like retro gaming, or something. But for all other purposes:

Goodbye, XP. It was nice knowing you.
