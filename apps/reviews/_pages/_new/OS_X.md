---
layout: newreview
title: OS X
description: Welcome to Jackass.
order: 20
previousReview: "/new/Gentoo.html"
oldReview: "/old/macos.html"
icon: "/assets/img/icons/macos.png"
---

# OS X

Challenges:

- Install it. On a Thinkpad X200 (C2D, GMA).
- Is Snow Leopard still actually usable?
- Conclude this hell.

I know this is my main OS I use for everything, so I will be somewhat biased. But to avoid that I won’t talk about the modern macOS, which is what I use. Instead, I will torture myself by Hackintoshing the X200, same C2D I used for all the reviews previously. I sort of tried this back in the day, but it failed miserably with no iGPU drivers, no mouse drivers, no keyboard drivers, actually, it had 0 drivers. So, yeah, maybe this time we’ll do something better, eh?

## opencore

Welcome to OpenCore! It’s the new way to hackintosh hardware, as Clover fell out of favor really quickly and Chameleon might as well be sent into the deepest pit in hell.

Back when OpenCore started, I couldn’t even install it on my X220, which had a Sandy Bridge CPU, and I continued to use macOS Mojave on it with Clover. If I were to redo the setup now, I’d use OpenCore, but I use a Mac now. ...which will be running [OpenCore too](https://dortania.github.io/OpenCore-Legacy-Patcher/), soon enough.

Anyway, let’s take a look at the compatibility for our little X200, as knowing your hardware and your software is one of the steps for creating a Hackintosh.

_These charts do not take into account for old system patching. For example, OCLP linked above can install macOS 12.0 on a 2006 MacBook Pro with a Core 2 Duo, this will not touch us as you’ll see shortly._

{% picture jpt-webp "/assets/img/new/OS_X-1.png" --link /reviews/assets/img/new/OS_X-1.png --alt OpenCore compatibility chart showing Penryn to be initially supported since 10.4.10 and until 10.13.6 %}

The Core 2 Duo gives us a good vanilla window from Tiger to High Sierra, however...

{% picture jpt-webp "/assets/img/new/OS_X-2.png" --link /reviews/assets/img/new/OS_X-2.png --alt OpenCore compatibility chart showing 3rd Gen GMA graphics to be supported from 10.4.1 and 4th Gen from 10.5.0 until 10.7.5 %}

Our graphics do not. As all we have is Leopard to Lion support. As I already have done a [Lion Hackintosh on the X220](https://github.com/x-t/x220-lion-efi), I will try to use Snow Leopard (10.6) as a stand-in, as that was the version I wanted to put on the X200 in the first place, a few years back.

So, I’ll have to make an OpenCore USB for a BIOS, Penryn, X3100 system. God help me.

Why am I not using the old Hackintosh methods? Because they absolutely suck. Trust me, I remember all the iHack, Chameleon, Unibeast and the other crap that supposedly made it easier. It didn’t. It sucked then and it sucks now, so if OpenCore can’t do it, I won’t bother.

## installation

Step one was to replace my Wi-Fi card from the Intel one to a Broadcom one. I know it worked on Lion to Catalina on the X220, no idea how it works on the X200, but because Intel doesn’t work at all on any machine, I have nothing to lose.

{% picture jpt-webp "/assets/img/new/OS_X-HW-1.jpg" --link /reviews/assets/img/new/OS_X-HW-1.jpg --alt Laptop motherboard with an Intel Wi-Fi card in PCIe slot 1. %}

{% picture jpt-webp "/assets/img/new/OS_X-HW-2.jpg" --link /reviews/assets/img/new/OS_X-HW-2.jpg --alt Laptop motherboard with a Broadcom Wi-Fi card in PCIe slot 2. %}

_I have to use it in the WWAN slot, otherwise the BIOS doesn’t boot, because Lenovo and IBM historically implemented Wi-Fi allowlists, which suck beyond belief._

With this, I got the BCM4322 in lspci, but for some reason Gentoo wouldn’t allow me to use it, oh well, that’ll do well enough. Time to put the screws back in.

Now I was in completely uncharted territory, I have hackintoshed before, even used it as my main computer, but I never tried OpenCore, Snow Leopard and definitely not on hardware this terrible.

The guide was very straight-forward. Up until you actually have to set things up, at that point it becomes a spaghetti wrangle amount of paths. I also noticed that Penryn laptops aren’t supported, only desktops. And since I know nothing about patching up my own, I went ahead with the desktop instructions. After spending a good hour in the config.plist not understanding anything, I was ready to send it off and boot. Fingers crossed 🤞

That did nothing as I was met with a very insightful error message

```
OC: OcMiscEarlyInit...
OC: Failed to load configuration!
```

Whatever that means. Turns out I misplaced the config.plist file. Okay then, moving on.

This still didn’t get me anywhere, as it was stuck while booting. One notice too, is that it’s so slow. Like, genuinely slowest thing I’ve ever booted. Over a minute from a black screen to the picker menu level slow.

I enabled fake NVRAM, but I still ended up being stuck at `adding AppleEFINVRAM notification`. Willing to bet that I’m the first ever guy who came up with a configuration this ludicrous, so I started to remove kexts, to see if I would be able to boot in some sense.

Left to the bare kexts, it was still stuck.

Yeah, honestly, I don’t even know where to go from here. Nothing here is documented, no one has ever thought to do this on an OS this old, hardware this old and a bootloader this new. Considering I’m totally new to this space, and this is absolutely advanced level trigonometry, I am literally giving up, this is not for me.

Now, I do have an utility that could try and make the old-era Hackintosh solution however...

{% picture jpt-webp "/assets/img/new/OS_X-3.png" --link /reviews/assets/img/new/OS_X-3.png --alt Parallels Desktop error saying 'An invalid macOS version is installed.' %}

It very much obviously doesn’t work on Big Sur and I cannot get an old OS X on Parallels.

So... what now?

Well then, at this point, let’s cross off the challenges

- ~~Install it. On a Thinkpad X200 (C2D, GMA).~~
- ~~Is Snow Leopard still actually usable?~~

Because these won’t be done. But for giggles, let’s run OS X anyway. Let’s try running Catalina inside a VM using macOS-Simple-KVM. I have done this before (with El Capitan) on the X200 and it ran like an absolute turd. I am expecting it to be even worse now, but I wasn’t here for usability anyway.

_For OpenCore, though, see you soon. Hopefully installing it on a Mac won’t be a total hell like installing it on a PC._

I’ll use elementaryOS, which is Ubuntu with a different UI as the KVM host. The SSD still has Gentoo, but you can gladly go choke on something if I’m waiting for QEMU to compile.

## kvm

Yeah, a bit boring, and I honestly would’ve preferred to do a Hyper-V setup, however the C2D is too old for Hyper-V.

{% picture jpt-webp "/assets/img/new/OS_X-4.png" --link /reviews/assets/img/new/OS_X-4.png --alt elementaryOS desktop showing output of neofetch. %}

_Woah, we’re back!_

However, as if it couldn’t get any worse, Linux borderline refused to recognise VT-x. I accidentally disabled it in BIOS while installing, and after enabling, it doesn’t bother. `vmx|svm` isn’t listed in the CPU flags, and KVM doesn’t start.

I absolutely don’t know how to even begin fixing this, it’s borderline embarrassing for Ubuntu. I tried disabling VT-d and only leave VT-x, rebuilding initramfs and genuinely nothing got it to see a CPU flag that’s literally there.

Either I performed the worst BIOS update of all time or Ubuntu is somehow the worst distro of all time. To find out, let’s install Fedora instead. I’m genuinely getting sick of it all.

On the Fedora Live CD, I looked at my /proc/cpuinfo and was met with the lack vmx, which made me believe that I totally ruined my board. However after installing it, KVM magically appeared out of nowhere.

... what?

Whatever, this means we can continue. After I’m finished I will try Ubuntu again to see if that will get back VT-x again, but for now, let’s finish it off with Fedora.

4 hours after starting the VM, it got beachball’ed before even trying to launch the OOTBE. Oh well.

## conclusion

{% picture jpt-webp "/assets/img/new/OS_X-5.png" --link /reviews/assets/img/new/OS_X-5.png --alt Fedora/GNOME desktop with QEMU in the background having a beachball cursor icon and no windows, as well as a terminal on the right showing neofetch output. %}

_Cool ball!_

{% picture jpt-webp "/assets/img/new/OS_X-6.jpg" --link /reviews/assets/img/new/OS_X-6.jpg --alt macOS Big Sur desktop with an 'About My Mac' dialog. %}

_This was a catastrophic failure. Here, have my Mac desktop. Something that actually works._

This wasn’t a macOS review, really. Because truth be told, I haven’t changed my mind much on it. It’s still my daily driver, it’s still the best tool for the job and I will probably continue using it till Haiku becomes a feasible daily driver.

If you want to read something that resembles a macOS review, read the old review for it. Otherwise I really tortured myself for 2 days here to try installing an OS not made for the hardware.

Pro-tip: don’t Hackintosh a Core 2 Duo. Not worth it.

Get something more modern, or, you know, buy a Mac. One of my favorite parts of the current Mac generation is the amount of salt. Boo-hoo it only has 8 gigs of ram, but let’s completely forget it totally runs circles about your X1 Yoga XPS Turbogarbage Core i12 with a DVD drive.

Whatever, have fun, if Gentoo isn’t a challenge, then this sure bloody is.
