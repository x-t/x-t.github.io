---
layout: oldreview
title: (old) macOS
backUrl: "/new/OS_X.html"
---

# macOS/OS X review

|                    |                                                  |
| ------------------ | ------------------------------------------------ |
| Kernel             | Mach/XNU                                         |
| Init system        | launchd                                          |
| Releases           | Whenever Apple dings you                         |
| Userland           | Mainly FreeBSD                                   |
| Package management | None by default, brew or MacPorts as substitute  |
| libc               | libSystem.dylib (as if that means anything lmao) |
|                    |                                                  |

macOS is an operating system made by Apple. It's the second most popular OS in the entire world, grabbing a nice 10-20% of the desktop marketshare.

## Packages

ALL OF THEM. ALL. NONE LEFT BEHIND.

Not only is almost every GAHNOO/LEENCUX package ported and is downloadable via MacPorts or brew, you also get a metric tonne of professional software. This includes, but is not limited to

- All of Adobe's line up. Windows lovers will hate this - these tools are native to macOS and work a hell of a lot better here, Windows is a bad port.
- A proper Chrome build. I'm sorry but the Linux port of Chrom{e,ium} is a pile of RAM-leaking garbage. I cannot help but notice the seconds of lag and near-gigabytes of RAM usage in every Electron app. It's sooooo much smoother on macOS (same goes for Windows)
- All Apple's professional software - like Final Cut Pro or Logic. Although many buttmad Linux users love to talk down on these tools saying that "everyone that uses them hates them", that is simply not true. They may not be the best if you've already learned something like Premiere Pro, but you cannot deny their popularity in the professional stage.

At this point I'll have to say - macOS has all the software. Everything except the boomer Windows tools like procmon.exe and mIRC and foobar2000 or other stuff like that.

On it being up-to-date, macOS has no package manager, which means that every application checks for a newer version itself. Linux users foam at the mouth hearing this approach, but let me tell you why it's superior. It's a startup check. It takes no time and you'll get updates the fastest. No sweat if the repository breaks down or your package manager breaks down or you being lazy and not updating for a little while.

And by the way, I use brew, which is pretty up-to-date, so no problem there.

## Installation

Well... damn.

There are two ways to install macOS

### _The right way_

This is if you own a Mac, you'll pop out the .app on an USB drive, click through a few buttons and you'll have a fully functioning system in the matter of minutes. Or you may have an older Mac which doesn't support the version of macOS you want to install, then you're going to get some patches from dosdude1 and follow the extremely detailed and simple instructions to get a working system.

### _The... um... ugly way_

And if you're too poor to own a Mac, you'll have to go through the hell to get it to work. macOS completely hates many pieces of hardware and most end up picking a list of parts before building a PC specifically for hackintoshing. If you're like me and own a laptop, well, you must be as lucky to have a hackintoshing community for that specific laptop. I own an X220 which has a pretty large hackintoshing community consisting of around 5 members. This means I dragged a folder full of kexts and patches to get my install working. Other laptops, you may not even get working. Ever. I know this when I tried to hackintosh a Packard Bell. The ATI 5740M card is COMPLTELY unhackintoshable. No way to get it working. Get a different laptop at that point. Yeah, this is ugly, and frankly, the worst part of OS X. I am glad that there exists a community making an effort, I'm mad that it has to exist.

## Usability

### Advanced use

I don't know how advanced of an user I am, but I can do some complex stuff sometimes, and macOS pretty much held up nicely all the time. As I said, all the Garbage/Lincrap tools are ported over and macOS uses an UNIX shell, which is really nice.

What you'll notice though is that macOS is UNIX-standard compliant somewhat, but implements some of its own stuff info the mix, here are some gripes I have about it (but don't take these as bad things)

- The /home (or /usr/home) directory is /Users. I don't really understand this. Clarity? Yes. Necesarry? No.
- It automounts stuff to /Volumes/[Volume name]. Yes. This a thousand times yes. I mean I didn't mind doing mount /dev/sdb1 /mnt all that much all these years, but having automounted stuff is quite convenient. But the way Linux DEs do it is absolutely ludicrous. /media/\[username]/random-garbage/\*. Really? WHY? This is terribly inane! What is the point of this random garbage? Why not use the volume name? I literally had to open the file manager to find which volume that was in there was what. And I had to keep that file manager open because I would keep forgeting what a918-1kna and ij1k-997c meant. Ridicilous.

### Simple use

This is where macOS shines. Unlike Linux where everything is made needlessly complicated and now every DE is trying to make itself easier but is failing, macOS has everything a simple user would ever need in a simple and easy-to-understand GUI. Now I don't want to make this sound like a system made for fools like Windows. macOS strikes a balance of making simple things simple and letting advanced users do advanced things. Even as a pretty good computer man, I still like using the simple GUIs that macOS gives, unlike where in Linux it was the terminal or nothing.

## Where is macOS used?

Desktops. Yeah, they tried entering the server market with OS X server once. It was genuinely laughably bad. And I don't even feel bad, this is a desktop OS at heart and Apple realized that by continuing the "Server OS" as an add-on package. Stick to Linux for servers, macOS on a server is a pile of hot crap. Yes, it supports what Linux supports, but it's not made for that. Even Windows server is probably better, as that has a pretty significant market share. Yes, Linux lovers, Windows server is not dead, it still has around half of the world's servers in their hands.

macOS is extremely popular with sysadmins and developers. This is because most developers are soyboys and most sysadmins deal with Linux struggles everyday on their servers and want to chill out in their free time.

macOS is used by people who use Mac hardware. The appeal being that it's pretty good stuff I guess. I mean other than the occasional breaking that Louis Rossmann deal with, it's pretty OK.

## Conclusion

|       |                                                                                                                                                                                                                      |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pro   | A lot of software. Like, a lot.                                                                                                                                                                                      |
| Pro   | A balance of basic/power user that no other system managed to get.                                                                                                                                                   |
| Pro   | Unix. You're not going to get abused in the terminal unlike Windows                                                                                                                                                  |
| Pro   | Updates applications seperately.                                                                                                                                                                                     |
| Pro   | Customizable. Yes, Reddit, macOS **IS** customizable. A guy won a Gentoo ricing competition using macOS.                                                                                                             |
| Mixed | Proprietary. It's a really polished piece of software, but fsf will be mad because they think that it'll leak their 4 petabyte furry porn collection to the NSA.                                                     |
| Mixed | Bloated. It's huge. But I think that it's a good size enough for an usable system. This isn't Linux, turn on a different mentallity.                                                                                 |
| Con   | You'll need to rewrite some scripts, this isn't a regular BSD.                                                                                                                                                       |
| Con   | Only works properly on Mac hardware, I don't need to explain why that's bad.                                                                                                                                         |
| Con   | The company behind it is questionable.                                                                                                                                                                               |
| Con   | Apple ends support for older Mac hardware too soon. Mojave doesn't run on 2nd gen Intel CPUs. What? You'll have to rely on patches for the most part if you're on older hardware. Thank god they're really reliable. |
|       |                                                                                                                                                                                                                      |

Personally, macOS changed the way I look at operating systems. I hated it a lot because /g/ hated it. I never tried it. Once I did, I realized that it's a seriously good piece of software. I am definitely not switching from this any time soon.
