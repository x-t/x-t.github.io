---
layout: newreview
title: Windows 7
description: The old dog.
order: 5
previousReview: "/new/Void_Linux.html"
oldReview: "/old/windows.html"
nextReview: "/new/Arch_Linux.html"
icon: "/assets/img/icons/windows7.png"
---

# Windows 7

Challenges:

- Install Windows XP Mode
- Play the default games
- Update X200’s BIOS
- Install chocolatey

Windows 7 is totally timeless. Personally I think that Vista was better looking and after a few service packs it got really good, and 7 was there to distract everyone from the name, i.e. remember the “Mojave” project? Still though, being in the right place at the right time has made it the biggest computing giant. But its days are counted, in fact, it’s over a year since the EOL date for Windows 7. Applications are starting to drop its support, or at the very least keep pushing their EOL date farther and farther, but it’s unquestionable that the day is coming closer and closer.

So, what’s in it for the the olde Windows?

{% picture jpt-webp "/assets/img/new/Windows 7.jpeg" --link /reviews/assets/img/new/Windows 7.jpeg --alt A joke Windows 7 desktop showing a picture of Bill Gates, a cmd.exe window, a Powershell window, an explorer.exe window and Task manager. %}

## hardware

Due to Microsoft’s push to include as many drivers as possible in Windows Update, it’s actually not a complete dumpsterfire. I got an ISO made from 2018 and nearly all drivers were included, after a couple hours of WU tinkering, I got the rest installed, including Intel GFX, Intel Wi-Fi, Broadcom Wi-Fi, PS/2 Trackpoint drivers, etc.

## software

Things are still supported. However, you’ll end up in something I’d call “update hell”. Truth is, Windows 7 is oooooooold and the fact that it works with modern software is only because of its library of thousands of updates, all of which you have to install. There are ways to soften this up a bit, by using a newer ISO, a custom ISO or using convenience rollups, but with all due respect, they still don’t work. The sheer amount of updates needed to get it all under control genuinely breaks Windows Update, you’ll have to pick and choose them by hand, see which ones work, which ones don’t, and don’t forget, we’re past the EOL date, which means the Microsoft is taking down links for them. Some updates you won’t even know the KB number for to look up in a library. I still didn’t install all the updates, I have quite a few, to get things up to speed, but definitely not everything, and every time I boot WU still keeps bugging me to install updates, which it will restart the computer for, fail, and then go back to do the same.

## challenge 1: Update BIOS

Since the BIOS Update utility is for Windows and works with versions up to 7, I decided that it’s the best time to go ahead and do it, to get out of the way with it. It was already hard enough getting Windows itself to work with all the updates and them failing, but getting Lenovo’s utilities to work was a completely different hell. The battery in my laptop is dead and because of the vile way that Lenovo builds their utility, it doesn’t allow any computer without a battery to update its BIOS. This coupled with the fact that every Windows support forum is filled with brainless fools spouting “it’s dangerous! buy a battery!” didn’t help me at all, in fact it made me angry beyond belief. I tried nearly everything until I decided to modify the executable using Ghidra.

{% picture jpt-webp "/assets/img/new/Windows 7-1.png" --link /reviews/assets/img/new/Windows 7-1.png --alt Picture of Ghidra with an Win32 executable open %}

_This is the section of code responsible for checking the battery and failing it, all of this was NOP’ed out to bypass._

Afterwards, it worked. I was able to flash the BIOS without the battery on Windows. But to my horror, the keyboard in all BIOS screens stopped working. After scrambling around thinking how would I install coreboot on this laptop or even find the original BIOS image, I decided to try in and plug back the battery and then boot. Out of nowhere, it was fixed.

## challenge 2: install chocolatey

After a day of updates, I got up to PowerShell 5.1, which let me install chocolatey. Nothing too spectacular there, it’s still supported. It’s the fact that it needs hundreds of updates to install, and that Windows Management Framework updates are really hard to find, they’ve been deleted from Microsoft’s site. (PS 4.0 ones, which is needed to bootstrap to PS 5.1, 5.1’s files are still up, probably because of Windows 8).

## challenge 3: default games

True nostalgia right there, I played them a lot back in the day. I know XP had good default games, including Pinball, but in my opinion Vista/7 DirectX games were absolutely gold, and have aged really well, considering how bad the current “Windows Games” on 10 & 11 are.

One thing while playing I noticed, however, is that this iGPU doesn’t work well. I know from a couple of years ago that the graphical glitching in Windows is caused by having virtualisation enabled, which I wasn’t going to disable. I don’t know if there’s a driver that works better, but I didn’t care too much, as this was a temporary setup.

{% picture jpt-webp "/assets/img/new/Windows 7-2.png" --link /reviews/assets/img/new/Windows 7-2.png --alt Minesweeper application with a Game Won screen %}

Minesweeper I didn’t actually play a whole lot back in the day, considering I never bothered to learn how to play it. However a few years back I learned to actually understand it, which ended up making it one of my favorite games, however I think the DirectX port of it is a bit unnecessary, the whole charm of the old Minesweeper was how it looked, not necessarily that Minesweeper was a great game. I can attest, I always loved how Minesweeper on XP looked, but I never even played it.

{% picture jpt-webp "/assets/img/new/Windows 7-3.png" --link /reviews/assets/img/new/Windows 7-3.png --alt Chess game with a beginning board layout %}

I literally cannot say anything about Chess. I don’t know how to play it. And I cannot be bothered to learn it.

{% picture jpt-webp "/assets/img/new/Windows 7-4.png" --link /reviews/assets/img/new/Windows 7-4.png --alt FreeCell window %}

{% picture jpt-webp "/assets/img/new/Windows 7-5.png" --link /reviews/assets/img/new/Windows 7-5.png --alt Hearts window %}

FreeCell and Hearts is in the same category of “I never learned it, so I never played it”. I think I used to play them a really long while ago, but they never stuck with me and I have forgotten since then.

{% picture jpt-webp "/assets/img/new/Windows 7-6.png" --link /reviews/assets/img/new/Windows 7-6.png --alt Spider Solitaire window %}

Spider Solitaire is another one of those, except for the fact that I used to play it, like, a lot. However, I forgot how to play it, and it rather seems boring.

{% picture jpt-webp "/assets/img/new/Windows 7-7.jpeg" --link /reviews/assets/img/new/Windows 7-7.jpeg --alt Mahjong Titans window %}

Mahjong Titans is an absolute GOAT. Definitely one of the best versions of the game and one of the best games included in Windows. It’s worth installing on Windows even to this day, considering how timeless Mahjong is and how great this DirectX version is. Great, great time waster.

{% picture jpt-webp "/assets/img/new/Windows 7-8.png" --link /reviews/assets/img/new/Windows 7-8.png --alt Spider Solitaire window %}

I still play Solitaire to this day, however I don’t particularly care that much for the DirectX port of it. I think it’s a good port, but again, like with Minesweeper, the cards bouncing around the screen, the primitive art, the lack of animating everything and anything really sells the XP edition more, even if it looks like total garbage on modern systems.

{% picture jpt-webp "/assets/img/new/Windows 7-9.png" --link /reviews/assets/img/new/Windows 7-9.png --alt Solitaire from XP, running at 2560x1600 resolution, thus totally incomprehensible. %}

_Does anyone have a pair of glasses?_

{% picture jpt-webp "/assets/img/new/Windows 7-9.png" --link /reviews/assets/img/new/Windows 7-9.png --alt Solitaire from XP, running at 2560x1600 resolution, thus totally incomprehensible. %}

{% picture jpt-webp "/assets/img/new/Windows 7-10.png" --link /reviews/assets/img/new/Windows 7-10.png --alt Purble place front screen. %}

{% picture jpt-webp "/assets/img/new/Windows 7-11.png" --link /reviews/assets/img/new/Windows 7-11.png --alt Purble place cake factory game. %}

This BAMF doesn’t need any introduction. Purble Place is by far the most iconic out of all of these games, even if now once we’ve grown up it’s essentially a literal cakewalk. The memories stay, however, and for good. It may be gone from Windows now, but we’ll always remember you.

## challenge 4: virtual windows xp

This has to be one of the most interesting Microsoft products. Because Vista was a failure, many people were still running XP, and after 7 came out, Microsoft realised that maybe it would be a good idea to get over everyone who is afraid of their software not working on 7. Compatibility mode doesn’t work, never has, never will. And Microsoft already had done stuff with Virtual PC, so they sort of decided to mish-mash them together by gluing Virtual PC into Windows Explorer, and then providing a free download of Windows XP for you to run inside it.

{% picture jpt-webp "/assets/img/new/Windows 7-12.png" --link /reviews/assets/img/new/Windows 7-12.png --alt Windows XP mode installer in the background with a focus on Windows Explorer Virtual Machines extension window. %}

_You can see the installer in the background and the Virtual Machines window, which unlike VPC 2007, is only a shell extension._

{% picture jpt-webp "/assets/img/new/Windows 7-13.png" --link /reviews/assets/img/new/Windows 7-13.png --alt Windows XP Mode installer, installing the virtual hard disk. %}

_XP Mode doesn’t require licenses to work. Not even the host version of Windows 7 is activated. It’s still in evaluation mode._

{% picture jpt-webp "/assets/img/new/Windows 7-14.png" --link /reviews/assets/img/new/Windows 7-14.png --alt Virtual Windows XP mode running Pinball %}

_It’s not even a stripped down version of XP, it’s fully-fledged. Even includes all the standard games. This means that if you had 7 Professional, Ultimate or Enterprise, you could’ve still played Pinball without fuss._

{% picture jpt-webp "/assets/img/new/Windows 7-15.png" --link /reviews/assets/img/new/Windows 7-15.png --alt Virtual Windows XP running a copy of New Moon with the gentoo.org website open. %}

_Why not, right? By default it’s under a NAT without networking, so switch to your bridged interface._

You may now ask yourself, is this only for Windows XP? Can I run other virtual systems using this?

{% picture jpt-webp "/assets/img/new/Windows 7-16.png" --link /reviews/assets/img/new/Windows 7-16.png --alt Debian installer inside Windows Virtual PC %}

{% picture jpt-webp "/assets/img/new/Windows 7-17.png" --link /reviews/assets/img/new/Windows 7-17.png --alt Debian failed to boot in Windows Virtual PC, with output showing 'Missing UUID' and then starting BusyBox from initramfs. %}

_No. You cannot._

Nowadays Hyper-V is way, way, waaaaay better than this, even if you’re an end-user. And considering it supports Windows XP, this sort of lives on. Buuut, you will have to somehow activate the version of XP in Hyper-V.

## conclusion

It’s very clear that Windows 7 outlived anyone’s expectations. Windows Update was not meant to deal at this scale and nowadays it’s nothing but in maintenance mode. A hell to get working, a hell to maintain, and only a question of when, not if, it will be totally unsupported and even browsing the internet will start to lack behind in security & feature fixes.

And considering that Windows 10 LTSC is essentially the same package, a bit newer, with indefinite support, not under WU hell, with new hardware support, Hyper-V and new PowerShell. Why would you bother with 7? It’s easier to stick LTSC on a flash drive, isn’t it?
