---
layout: oldreview
title: (old) Void Linux
backUrl: "/new/Void_Linux.html"
---

# Void Linux/GNU review

| | |
| - | - |
| Kernel |	Linux |
| Init system | runit |
| Releases |	Rolling |
| Userland |	GNU |
| Package management |	xbps |
| libc |	glibc, with option of musl |
| | |

Void is a niche distro that's made by MLP fans in their parent's basement. The only thing that sets it apart from other bad distros like Arch is their choice of the init system, runit. Which although isn't as bad as systemd, is still comparing puke to excrement.

## Packages

xbps is probably one of the worst package managers I've encountered. It randomly breaks if the buildbot is having a fit (you won't be able to install anything). xbps tries to be pacman, which is an absolutely terrible choice. On the variety of packages, there are quite a lot of them, although I ended up compiling some packages from source, but if you're an i3-gaps tier fool you won't find a single package missing as even the gaps version is in the repos.

Some packages are up to date, like bash, but some are out of date, like Linux and qt5-webengine. It's an interesting mix, but on average it's newer than Debian so it passes.

## Installation

It has an installer. That's about it. It's pretty easy to follow if you know what you're doing, and it's pretty nice in general.

If you pick the minimal (tty-only) install ISO you may end up without WiFi support like me, at that point get one of the ISOs with a DE, which have NetworkManager pre-installed.

From the ISO with a DE you can pick if you want to install from the media itself (local) or via the internet (network), you'll only install the pre-installed DE if you choose local, but I always chose network because I don't want to wait an hour for everything to update.

## Usability

### Advanced use

It's Linux. It's pretty much the pure advanced Linux. It's as least Ubuntu-ish you can get, other than probably Gentoo or Arch. I don't know if that's a bad or a good thing. I can do all the complex stuff I do on macOS, so I feel like using an "advanced distro" would make your day less comfortable.

I guess you wouldn't really make a server out of this, since it's rolling.

An issue I had was that it kept freezing all the time, and with more research (a thread on /g/) I found out that the problem is genuinely pretty rampant. This wasn't fixed since the previous time I used Void in 2017.

Another issue was that the PulseAudio and ALSA builds on Void are broken, I literally could never get my microphone working properly. Ever.

### Simple use

No.

## Where is Void used?

A few pony-lovers, weebs and desktop posters on /g/.

## Conclusion

| | |
| - | - |
| Pro | No systemd, runit is really fast
| Pro | Ye olde Linux, like the olden days before this Poettering came in and screwed us all in the ass.
| Pro | A strong repository.
| Con | A void of documentation
| Con | Possible and widespread hardware issues non-existant on other distros.
| Con | xbps is bad.
| Con | Some software in the repo is broken.
| Con | runit has design flaws.
| Con | No modern features like NFS-mounting in fstab
| Con | Community of fools
| Con | Linux updates are delayed due to "proprietary modules"
| | |

Sadly, this was one of the best Linux distros I've used, which should really throw a realization on how screwed the distro world is.
