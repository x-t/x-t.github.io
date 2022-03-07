---
layout: newreview
title: Gentoo
description: Some say, it's still compiling.
order: 19
previousReview: "/new/Windows_11.html"
nextReview: "/new/OS_X.html"
icon: "/assets/img/icons/gentoo.png"
---

# Gentoo

Challenges:
{% picture jpt-webp "/assets/img/new/Gentoo.jpeg" --link /reviews/assets/img/new/Gentoo.jpeg --alt Youtuber Techmoan holding up a CD with text superimposed on the left reading 'How to install gentoo in only 3 weeks' %}

The first thing about Gentoo that you have to know, is that it’s not a distro like any other one I’ve looked at here.

Installing Gentoo is a running joke, as it is one of the most difficult things to do. It’s not impossible, however, and some people (mainly Google) like the flexibility of Gentoo, with the ability to compile builds for yourself, with the features you want, but still reproducibly.

Instead of saying “oh, I’ll install Gentoo today”, you have to start out with a plan. What you want. What you expect. How you’ll do it. Here’s my idea.

**The system**

Here’s what I want to set up for this system. Mind you, I do not care for longevity here, I only want to install it. @world breakage is not in my mind.

- systemd
- gentooLTO
- X11
- Cinnamon

**The build**

Since this is a C2D, which is not known for its speed under load, I will take help from my Haswell MacBook, which will be running distcc inside a Docker container.

With a rough plan. Let’s walk in. I have not done this in literal years.

## installation

### Day 1

Started with the systemd stage 3. I got a chroot set up with distcc. I didn’t do a whole lot with it, as I was watching movies.

### Day 2

I compiled the Linux kernel and rebuilt gcc with USE=graphite. Yeah, I used genkernel. I can’t be bothered with menuconfig mate, I spent hours trying to understand it back when I tried compiling OpenWRT.

### Day 3

I started recompiling @world with ltoize, but after realising that it kept running in circles failing, I decided to drop this idea and start over.

- ~~gentooLTO~~

This time, I will drop LTO and install the base system normally, without distcc or dangerous optimisations.

{% picture jpt-webp "/assets/img/new/Gentoo-1.jpeg" --link /reviews/assets/img/new/Gentoo-1.jpeg --alt Pope holding up a fake Gentoo CD. %}

_It’s great when it isn’t your main distro, as I no longer have to worry about taking 6 hours to compile LibreOffice to do an assignment that’s due in 20 minutes._

### Day 4

Installed GRUB, finally booted from the hard drive. After trying to set up CFLAGS with core2 optimisations, I ended up totally breaking gcc, therefore, I decided to drop the distcc idea. I have time.

{% picture jpt-webp "/assets/img/new/Gentoo-2.jpeg" --link /reviews/assets/img/new/Gentoo-2.jpeg --alt Terminal output showing the compilation of sudo. %}

_Do source distributions make sense? I don’t know, but all I know is that I weirdly like it. Still though, this would be really, really annoying if this was my only machine. Which, back in the day, it was. It was sorta like speedrunning back then._

Thus, I began the 395-long emerge of Cinnamon. Why Cinnamon exactly? It’s for nostalgia sake. The first time I installed Gentoo back in the day was with Cinnamon. I don’t like Cinnamon, I only want to remake the setup. Real Gentoo, real Cinnamon.

{% picture jpt-webp "/assets/img/new/Gentoo-3.png" --link /reviews/assets/img/new/Gentoo-3.png --alt Screenshot of the Gentoo website saying 'Note: The compilation duration for net-libs/webkit-gtk can be very long, especially on older hardware. Be patient, Cinnamon is worth it!' %}

_It bloody isn’t._

### Day 5

I woke up to Cinnamon still compiling, and after clocking in at the 22nd hour, it finally finished. I knew I would be going out for nearly all day, so all I did was set it to emerge Firefox, then left it there.

Coming back home nearly midnight, Firefox had finished compiling, which was sort of surprising. No end in sight for the 200°C Core 2, however, as it was immediately tasked with rebuilding @world with my new global USE flags. This included rebuilding gcc, so it’ll go well into the night.

### Day 6

Woke up to tmux having an “[exited]” sign. That was probably my cat sabotaging me. However, it turns out that the tmux session was ended after @world was already rebuilt. I knew I’d be gone again, but that didn’t matter, as I set GDM and some QOL applications to emerge.

About 3 hours later, I was ready to get the minimal (but possibly functional) system fixed up.

Turns out I also somehow ended up with GNOME. No idea how that happened. All the fonts were missing and it had no terminal. So, more emerging was needed. Oh yeah, screen tearing too. God bless X11 🙏. In fact, it’s so good, that even after I set my X11 options to use sna/TearFree, I still had screen tearing. But truth be told I’m not going to be using this system, so I cannot be bothered to troubleshoot it.

{% picture jpt-webp "/assets/img/new/Gentoo-4.png" --link /reviews/assets/img/new/Gentoo-4.png --alt Gentoo/Cinnamon desktop showing the output of neofetch. %}

_A lot of things have changed since I was last here._

{% picture jpt-webp "/assets/img/new/Gentoo-5.jpeg" --link /reviews/assets/img/new/Gentoo-5.jpeg --alt Gentoo/Cinnamon desktop showing the output of neofetch and Discord in the background %}

_In fact, here’s a photo from 2017 for reference._

Now I was ready to go ahead and break the system. I still wanted to see if gentooLTO works, so I logged out, installed layman, the overlay and started, once again, to rebuild @world. 903 packages, that. The amount of pre-merge checks made me really crap myself.

After reading some forum threads I also noticed that “sna” for Intel iGPUs is optional and requires a USE flag. Since I was already 158/903 deep into the merge, I wrote it down on a post-it note and stuck it to the display. I’d do it after this rebuild finished, well, if it succeeds, anyway.

### Day 7

{% picture jpt-webp "/assets/img/new/Gentoo-6.jpeg" --link /reviews/assets/img/new/Gentoo-6.jpeg --alt Album art of barenaked ladies - stunt %}

_It’s been one week._

Woke up to Rust compiling. Which meant there was still probably Webkit, SpiderMonkey and Firefox still to go.

I witnessed the first failure, gst-plugins-good. Now it’s at 4/136 (+771), about 31 hours after starting the rebuild.

### Day 8

46 hours after start, it was done with 1 failure. I added my USE flags and had to recompile stuff again, including Firefox. I couldn’t get Intel drivers with sna, however, so I wonder if getting rid of screen tearing in X11 will be feasible.

{% picture jpt-webp "/assets/img/new/Gentoo-7.png" --link /reviews/assets/img/new/Gentoo-7.png --alt Parody of the Grand Theft Auto series CD cases, reading Grand Theft Gentoo. %}

After this, I’ll try to fix something up using this guide.

At this point I went straight into a second failure, PipeWire couldn’t link properly, and thus broke. Well, this is the sort of stuff you run into while running an LTO system.

After a reboot, Cinnamon broke and kept telling me I was in fallback mode. Once again, I’m willing to blame LTO. Also, Cinnamon doesn’t really have a good port on Gentoo, it pulls in an old version of SpiderMonkey, which depending on the phase of the moon can totally fail to compile.

{% picture jpt-webp "/assets/img/new/Gentoo-8.png" --link /reviews/assets/img/new/Gentoo-8.png --alt Gentoo/GNOME desktop showing the output of neofetch. %}

_GNOME’s better anyway._

## conclusion

Considering my past experiences with Gentoo, this went down a lot smoother than I would have anticipated. I think I weirdly liked installing Gentoo. It does make me sad that I do have to say goodbye to this install, as it isn’t secure by my main standards and it’s still a C2D. Most of the time I will pull out a laptop like this if I need a tool right here, right now. Waiting 10 minutes to compile Brasero to burn a CD, while in the same time I could’ve literally installed something like Fedora or Ubuntu and would’ve burned it faster, Gentoo doesn’t make sense.

It probably makes the most sense on newer and more powerful workstations. Something that can run Clear Linux and compile things quickly. At which point you will actually feel effects from -O3 -march=native optimisation, whereas on a C2D, it’s pathetically slow, and the speed improvements are essentially nil.

Gentoo is also a stable distribution, well, as long as you do it right. It’s not supposed to be bleeding edge like Fedora or Arch, as source-based installations can be much more wonky than binary ones, thus to stabilise your system and save time rebuilding, packages are pretty much pinned with Debian-tier versions. To get newer unstable versions, you have to unmask packages, for example if you don’t want Firefox ESR (7x) you can unmask `www-client/firefox` for your architecture (i.e. `package.accept_keywords -> www-client/firefox ~amd64`) and this will give you the latest stable Firefox (93 as of writing). This means that even when it’s a rolling distro without versions, you’ll still be using out-of-date software and/or experimental configurations. For example, PipeWire isn’t considered stable.

It is sad to say goodbye to this beast, as it did take 8 days of effort afterall (a little over a third of the three weeks projected), but it is genuinely useless for me.

Should you install Gentoo? Well, I don’t know. Gentoo is a so-called “meta-distribution” as the fact that you compile your own software allows for a very in-depth and integrated setup, as well as not having hard dependencies on the core components of the OS. You can pick and swap init systems, libc and even the kernel. I don’t know what you’d learn from it, considering nearly all of the work is done by Portage, and all you have to do is figure out how to use a compiler and bash. Other than that, I guess if you want to try it out, go ahead. It’s definitely fun.

And as for the meme that even I believed in that “Gentoo users are low-lifes with way too much free time”, I noticed that, well, that’s not particularly true. 98% of the time you do on Gentoo is wait and then, because it’s stable and doesn’t update too often, you use it as a normal Linux system. I think that if you use Gentoo, chances are you know perfectly well how to organise your time, you can put your time in several-hour windows to compile large applications, update your system, etc. and then use that time wisely for work, education, socialising or whatnot.

In short, it got annoying how long it takes to compile everything, but it was genuinely a nice and pleasant distro to work with.
