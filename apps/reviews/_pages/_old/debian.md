---
layout: oldreview
title: (old) Debian
backUrl: "/new/Debian.html"
---

# Debian Linux/GNU review

|                    |                                                               |
| ------------------ | ------------------------------------------------------------- |
| Kernel             | Linux                                                         |
| Init system        | systemd                                                       |
| Releases           | Stable (every few years, pinned), testing, unstable (rolling) |
| Userland           | GNU                                                           |
| Package management | apt                                                           |
| libc               | glibc                                                         |
|                    |                                                               |

Debian is a pretty nice distro. It's a pretty popular OS. It tries to be the best solution for servers.

## Packages

apt is a pile of garbage, I've never had this many systems slowly devour themselves and fade into unstability and unusability. This is why the stable channel exists. IT NEVER UPDATES. Every update for Debian is a chance of breakage. Although the breakage meme is less than Arch here, I don't feel like the issue has enough attention.

To expand on the update channels, there are three

- Stable - this only gets updated every few years, during that time every package is frozen and only the most important security updates are released. This is the worst to run as every package gets outdated and drivers become missing extremely quickly.
- Testing - this is a step above stable. This is the most stable rolling channel Debian offers. It's what the "next Debian" will be like. However there isn't a security team on this channel and most of the time you'll get security patches LAST. There is no reason to be on this channel.
- Unstable - this is the latest\* that Debian has to offer. Still outdated packages. Not even kidding, this is still outdated. It's lagging behind Ubuntu most of the time. That said, you'll get feature and security updates the fastest here. This is the channel to be on if you're on a desktop and not a server. Don't let the name scare you, it's actually not that unstable.

\* - there is the experimental channel. It doesn't contain a full system, this is an add-on to unstable. Don't consider using this full-time though, it's only a dumping ground for Debian developers to check for package ready-ness to put into unstable. Sometimes you can catch some more up to date packages and download it from there. I did this when Firefox 60 was still in the development stages.
Other than that, Debian is the mother of Ubuntu, everything compiled and designed for Ubuntu will be installable on Debian, because their package manager is the same.

Personally, I had some broken packages (on top of the system breaking) like the default LightDM theme being a broken mess.

Debian also splits their packages by their licenses, there are 3 categories

- main - Everything free as in freedom.
- contrib - Everything that is free, but depends on non-free software (example: VBox for having the BIOS compiled with a proprietary compiler)
- nonfree - An affront to humanity. Proprietary malware.

## Installation

It has a nice installer. It lets you select the installed DE during the install. This means no foolish spins or seperate distros, you'll get your updates from the Debian team and not a filter.

Hardware support is... interesting. It's Linux, it supports a lot, however Debian suffers from FSF syndrome and doesn't include device firmware by default, you'll have to install that yourself by enabling non-free repos.

## Usability

### Advanced use

It's Linux.

### Simple use

I'd rather give your grandpa Ubuntu. Although due to the lack of updates in the stable channel, you may prefer to give this after more setting up.

## Where is Debian used?

There is a large number of desktop users, on all release channels, but the most users of Debian are in the server room. Although Ubuntu in theory should beat Debian, Debian's stability and reliability is something no distro has ever touched, making it popular in servers because there are no updates.

## Conclusion

|     |                                                                                        |
| --- | -------------------------------------------------------------------------------------- |
| Pro | It's unique in the software sorting department, not a "yet another drop in the ocean"  |
| Pro | It's popular, therefore you get a lot support                                          |
| Pro | Installer lets you set up a system as bloated or as slim as you like, Arch users jelly |
| Pro | FSF are pretty happy because of package seperation                                     |
| Pro | Large binary repository due to compatibility of debs and PPAs                          |
| Con | Cumrag kernel                                                                          |
| Con | Outdated packages                                                                      |
| Con | apt is a mess beyond repair                                                            |
| Con | FSF syndrome makes 99% of WiFi, 100% of AMD and 50% of Nvidia cards not work           |
|     |                                                                                        |

I quite hold this distro to my heart. It's probably the one I used the longest, and it shows, it's actually really good, although the flaws got to me one day and I went out on an adventure for something better...
