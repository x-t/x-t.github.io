---
layout: oldreview
title: (old) Fedora
backUrl: "/new/Fedora.html"
---

# Fedora Linux/GNU review

| | |
| - | - |
| Kernel |	Linux |
| Init system | 	systemd |
| Releases |	Two every year and rolling |
| Userland |	GNU |
| Package management | 	yum and dnf |
| libc |	glibc |
| | |

Fedora is a distro managed by the Fedora Project and sponsored by Red Hat. It's commonly described as "a free version of Red Hat Linux". While to some extent that might be true, CentOS would come closer, because Fedora is a lot more up to date than Red Hat Linux and more designed for the desktop.

## Packages

yum is deprecated and dnf is here to replace it, practically - it's really the same thing, but with a few more features that I can't track down. The package selection is pretty big, but there are some issues. For example, to get media playback on any browser you'd need to use rpmfusion to install the plugins. It's also quite sluggish. They don't have any destinction between free, contrib or nonfree software, resulting in it not being freedom-respecting, if you're into that sort of thing.

There is no issue about out of date software, some software is older than let's say for example, Arch, but the stable release is up to date and if you want even newer software you can try out Rawhide, which is a rolling release of the latest Fedora features.

## Installation

The installer is the same thing you'd find in Red Hat, it's straight forward, with a few options and gets the job done.

Install media consists of Workstation, Server and Atomic. I'll focus on the Workstation release, since that's the only one I had any experience with.

There is the regular GNOME version, spins and netinstall, the netinstall has the most options and the other ones that only install the system, so there's nothing much to them.

## Usability

### Advanced use

It works well, set it up and keep updating - because those updates keep comming regularly. Also there is definitely some stuff to fix, like enabling rpmfusion to make things work.

### Simple use

Setting up Fedora for someone computer illiterate will definitely be a challenge, but the difficulty of setting it up shouldn't be any harder than Windows, replace drivers with media libraries. For daily use, it comes with a bunch of GUI tools and software that should make the job of using it easy.

## Where is Fedora used?

For one, Linus Torvalds uses it to maintain his kernel. Fedora tries to hit the desktop as well as the server at the same time, it's quite a good distro for daily use, but I don't really know how popular Fedora is in the server department.

## Conclusion

| | |
| - | - |
| Pro | Easy to install
| Pro | Trusted by a lot of people
| Pro | Up to date
| Con | Additional repos (rmpfusion) are required to make things work
| Con | Pretty bloated
| Con | Some controversial ones: systemd, GNU
| | |
