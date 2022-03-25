---
layout: newreview
title: Chrome OS Flex
description: Old becomes new.
order: 2
icon: "/assets/img/icons/chromeos.png"
previousReview: "/extras/pearOS.html"
---

# Chrome OS Flex

Challenges:

- None. Just vibes.

_Notice 1: this is an early access build, Flex is in its infancy and the situation can and will change over time as Google rolls it out to the stable channel._

_Notice 2: this overrides the old Chromium OS review._

Ever since the news hit that Google bought out Neverware, who created and maintained the flagship Chromium OS distribution Cloudready, who’s sole purpose was to run on as many pieces of hardware as possible, as fast as possible, everyone started to think that Google might be ready to tap into that market.

Cloudready was not the only Chromium OS distro, but it was the only one that actually had some corporate backing. Before Google’s buy-out, Neverware sold licenses and support for businesses that would install Cloudready on their old machines. This created an entirely new focus within the Chromium OS genre, with the main players being Arnold the Bat, which focused on pushing out vanilla builds as fast as possible, FydeOS, which focused on releasing features found in Chrome OS, but not in Chromium OS, such as Android support. Cloudready was there to do neither, it was there to create a **stable** experience for **as many machines as possible**. They didn’t rush updates, they took their time, and in my personal experience they ended up making the only Chromium OS distribution that actually worked.

The biggest challenge of Chromium OS compared to Chrome OS is that you don’t know what hardware the user has. Think of the driver hell that Windows has and the absolute bliss of hardware and software working in unison on macOS. Chrome OS was always the latter, Google oversaw every single Chromebook in existence, setting its’ EOL date, release cycle, firmware upgrades, etc. Chromium OS was not up to Google to figure out, so Google ultimately didn’t care what they did with it. Chrome OS builds were always optimised for the hardware they were on, this can be showcased extremely well with Brunch. Brunch is a framework that modifies stock Chrome OS recovery images to work on regular, non-Chromebook machines. To make one, you’ll need to use the most generic image available (i.e. the one used by most Chromebooks), then you’ll also need to make sure your hardware is at least newer than it. Hardware like the Core 2 Duo is off-limits, too old, missing instructions to run even the oldest Chrome OS image. Oh, and don’t forget - Chromebooks, just like Android phones do have EOL dates, after some amount of time, they do stop receiving updates.

Thinking about all of this, it’s amazing the Cloudready was able to do as great of a job as they did. They set the groundwork for Chrome OS Flex to come later on, as they shoved as many Linux drivers as possible, including support for everything, even down to the Core 2 Duo, documenting it all into the list of “verified hardware”.

While Neverware was able to do a lot, it’s still not enough for Google, as, the business pressures for a startup are always less than one of the biggest global monopolies in our lifetime. Chrome OS Flex needs to meet hardware compatibility that’s better than Cloudready, it needs to meet security better than Cloudready, it just needs to be better if they want it to succeed, and while it’s in public preview, I think I can say something about it.

I’ve been using Flex since day 1 of its public preview release. It’s not been my main OS, as I still use macOS for everything else, but for a second laptop, Chrome OS was an interesting proposal. I’ve been using Cloudready for months before, in fact, I’ve had Cloudready on my laptops, even as my main OS since 2016. To keep it short - I’ve always been a fan.

{% picture jpt-webp /assets/img/extras/Chrome_OS_Flex.png --link /reviews/assets/img/extras/Chrome_OS_Flex.png --alt Chrome OS Flex Desktop on a ThinkPad X200 %}

## Is it stable?

While it is still a public preview, stuck in the development Chrome branch, I have not had any stability issues.

## Does it have Android?

No, Android is not supported, just as it wasn’t in Cloudready. Google has not confirmed nor denied Android support for Flex, meaning it’s possible in the future, most likely after stable general availability.

## Does it have developer mode?

Chromium OS, including Cloudready, has always come with developer mode pre-enabled. This wasn’t _that_ useful, aside from shell access, plus there was a security concern, since anyone would be able to start up your Chromebook, hit Ctrl-Alt-Shift-F2 and have root access 😬

Chrome OS Flex (and the last few versions of Cloudready) have disabled developer mode, but it can be brought back by putting `cros_debug` in your kernel command line.

## Can I run Linux apps?

Chrome OS has several ways to run Linux applications.

1. Crostini
2. Crouton
3. Chromebrew

### Crostini

Due to heightened security requirements spun up by Google for Flex, your hardware may be now unsupported for it.

```bash
crosh> vmc start termina
Error: operation `vm_start` failed: bad VM status: `VM_STATUS_FAILURE`: Host vulnerable against untrusted VM
[ERROR:src/main.rs:183] ERROR: command failed
crosh>
```

This is a Core 2 Duo that’s plagued by CPU errata, unfortunately, there is no set of Intel microcode updates or kernel flags that would solve enough of this to let Chrome OS run VMs, for newer CPUs putting `kvm-intel.vmentry_l1d_flush=always` in the kernel command line is enough to make Chrome OS happy, otherwise, you’ll have to sit without it.

### Crouton

I wasn’t able to get it to work. Plus, it looks as if the maintainers have given up - no Ubuntu version is supported, no git activity since Jan 2022. Even if it works for some people now, chances are - if it breaks, it’ll break for good.

### Chromebrew

If the first and second options don’t work out, Chromebrew is there to help. Unlike Crostini which runs a Linux distro (by default Debian) in a VM and Crouton in a chroot, Chromebrew uses your Chrome OS install directly. No strings attached.

Thing is, this can be hit or miss at times. While most basic terminal apps will work, graphical applications might not be that good. For example, Signal doesn’t work.

{% picture jpt-webp /assets/img/extras/Chrome_OS_Flex-1.png --link /reviews/assets/img/extras/Chrome_OS_Flex-1.png --alt Terminal screenshot of signal-desktop starting, but failing with a core dumped exception. %}

And then, the integration does come into question. Unlike Crostini, Chromebrew will not add in your installed applications into the applications menu. Meaning, you’ll need to start up the terminal, then type in your executable and launch it that way. Not ideal in the slightest.

### Discontinued from Cloudready

There were two rather great ways to run Linux applications that Neverware put in, but they were discontinued in favor of Crostini.

1. Flatpak - you could download and install any Flatpak application by just double clicking a file. They were rather secure sandboxes and didn’t require a lot of resources, unlike a VM and container setup from Crostini.
2. VirtualBox - not only did it work great for Linux, you could even run Windows on it, something Crostini can’t do. And, it was a great alternative to:

## Parallels Desktop

That’s right, Chromebooks can run Windows with Parallels Desktop. But, not on Chrome OS Flex. This means Crostini with Linux, or nested KVM on Crostini or something is the only virtualisation option that’s available. Which, considering Flex runs on hardware that isn’t locked down to it, you can just install a Linux distro and be done with it.

## So... is it actually useful?

My view is - yes. If you have new enough hardware, you can run Crostini, and with Linux support, Chrome OS really does shine through. Although, mind you, this might be because I’ve used some sort of Linux for years, anywhere from servers, VMs to my daily driver, Tux has been there since my childhood.

But, even though my ThinkPad doesn’t have Crostini support, I still have Chrome OS Flex on it, here’s why:

### Security

While this is also the reason why it’s annoying, it’s also a reason why it’s useful. While nowadays setting up LUKS on any distro is rather simple, Chrome OS doesn’t need any of that stuff. All data is encrypted at rest and locked behind your Google account. While it’s still nowhere near as good as LUKS or Filevault (for example, anyone can still mount your ext4 filesystem and tamper with it), it’s enough for most uses, and especially for people not that well-versed with computers, they don’t need to remember a separate password just to boot. Ideally, Chrome OS security goes as far as the hardware, a Chromebook will always be more secure than any Flex machine, but it’s still way, way better than a default Windows install. Or like 85% of Arch Linux installs, no shade though, not your fault the wiki doesn’t put it on the front page 🤭

### Ease of use

I’ve tried probably every single desktop environment on the market. On this site alone, I’ve tried and reviewed many distro and DE combinations. And I can confidently say that there’s nothing more user-friendly than Chrome OS. The shell has the bare minimum, doesn’t overload you with a billion applications, doesn’t force you into a philosophy you can’t understand, it just works. The tools it gives - from the file manager, to the image viewer and the Chrome browser itself are polished, with enough features. Not only that, since 2020, Chromebook exploded in popularity, both from schools and businesses that needed cheap, cloud-ready machines for online work and meetings. Thus, Google put in a lot of effort into the new updates, and Chrome OS Flex follows the normal Chrome OS release cycle, getting updates at the same time, meaning all the new features (and there are many to come) will come to your machine as soon as any Chromebook. The future is looking bright ever since the sales of new Chromebooks have jumped over the sales of Macs.

### The Internet has gotten better

Chrome OS came out in 2011. Back then, Chromebooks, at least to me, looked like dream machines. Startup times unseen by anything (every Chromebook had an SSD), everything being done on the cloud, all on machines that were super cheap, and most amazing to me - not on Windows.

Everybody else saw this as a total joke. There was no way you’d be able to do any work without applications. Hell, what if you lost your internet connection?!? All of these concerns were answered by Google with a resounding “meh”. Unlike iOS (then iPhone OS), where Steve Jobs bet on the future of web apps on the phone and lost, making birth to the App Store, Chrome OS didn’t backpedal on any of their claims. They didn’t add any more applications, they didn’t create a new Play Store, it was just Chrome and web apps. That’s it.

And even though the bet took way longer than I’d imagine the Chrome OS team expected, they did end up winning the bet. Chrome Apps, while on their way out, have proven themselves to be okay at their job. PWAs have become indispensable to our current landscape, nearly every popular app nowadays, like YouTube, Notion, WhatsApp, Discord, Slack and many more others, is a PWA. While the official desktop app most of the time is an Electron wrapper, the version that runs in the browser has 95% of the features and is easily installable. PWAs, unlike regular sites also have one huge advantage - they can work offline. Something like Google Docs doesn’t really require an internet connection, so, you can make your documents offline.

{% picture jpt-webp /assets/img/extras/Chrome_OS_Flex-2.png --link /reviews/assets/img/extras/Chrome_OS_Flex-2.png --img width="256"  --alt XKCD Comic reading I'm a Mac I'm a PC And since you do everything through a browser now, we're pretty indistinguishable. %}

While clearly Google still thinks PWAs alone aren’t enough, indicated by the addition of Android and Linux compatibility, it’s not 2011 anymore, you can probably now switch to Chrome OS and do big parts of your work. Still, probably not its entirety, but, a huge chunk. Which is a good selling point for something like Flex, you can just take an old laptop, transform it into a Chromebook and have a simple, fast experience on the go, without the need to take your more complex setup.

{% picture jpt-webp /assets/img/extras/Chrome_OS_Flex-3.png --link /reviews/assets/img/extras/Chrome_OS_Flex-3.png --alt Gitpod tab open with my blog code %}

_Example: here’s GitPod, a cloud IDE that runs perfectly inside a browser. No Crostini for development required._

### Some truly magical performance

At the end of the day, my love for Chrome OS alone probably wouldn’t make me install it and actively use it on anything. But one thing makes me always come back. Even since the days of Cloudready, even on old, slow mechanical hard drives, even on CPUs as slow as the Core 2 Duo and first generation i3’s, even with GPUs as slow as the integrated Intel graphics, Chrome OS has been faster than anything else on the conceivable market.

I am unsure what magic they’ve pulled to make it work, I tried every setup in existence, from the most minimal Arch, to even `-O3` optimised Gentoo, I still didn’t see performance this good. Boots in seconds, usable browser in another second, applications launch in no time, tabs always buttery smooth, even on 4GB of RAM, instant wake-up from sleep (no Apple M1 required). Even without the custom EFI setup of Chromebooks, even without the custom CPU features found in Chromebooks, Chrome OS is \*fast as f\*\*\*\* on any piece of hardware I was able to throw it at.

**This** is the main reason why I love it. Even a ThinkPad from 2009 runs as fast, and sometimes even faster than my 2013 MacBook. Only Haiku is able to match this sort of performance, and Haiku cheats by the virtue of just being extraordinarily light. The entire system can fit in RAM, it’s fast because it’s small and it doesn’t do a whole lot, as a daily driver, it’s not ready yet. While Chrome OS is as fast and runs an entire Chrome browser. Watch movies, write documents, do whatever you want, it’s a full Chrome system that boots in under 5 seconds on a Core 2 Duo.

{% picture jpt-webp /assets/img/extras/Chrome_OS_Flex-4.png --link /reviews/assets/img/extras/Chrome_OS_Flex-4.png --alt Description below %}

_8 tabs, two video streams and a third one that’s being cast to a Chromecast, with Spotify PWA controlling a remote player in the background. Might I remind you - on a machine from 2009. With no slow down._

## Conclusion

> I think it’s fine. It’s not really there to set out to “destroy all distros” or something like that. It’s Chrome OS. It’s not Windows, not macOS, not Linux, only Chrome OS. If it’s enough what you need it for, then hell, go for it. There’s really nothing else like it.

This old conclusion was rather accurate, although not descriptive. Yes, it’s not here to destroy Linux, in fact, it embraces it. It also doesn’t want to kill Windows or macOS, clearly recognising its’ own weaknesses. But since Windows 11 has dropped **a lot** of perfectly-usable older hardware, Linux has gotten a new buzz. While distros and DEs are still scrambling themselves to make products that are good for newcomers, with everyone having used Linux for years, not knowing what a newcomer expects anymore, Google has gotten it totally right, and have released a product that could very well, after the Windows 10 EOL date, redefine what an old laptop should run.

Obviously, I’m biased, I always loved this OS since 2011, but seeing just how much the internet evolved, especially since 2020, especially since the giant sale boom of Chromebooks, Chrome OS Flex puts a reason on why we should probably take a look at Chrome OS again. It’s feasible now. Why not give it a shot?

Of course, it’s not the best thing since sliced bread - it’s closed source, it’s locked into Chrome, it’s locked into a Google account, Google spies on you, etc. And fortunately, if you care about any of this, Debian is always one ISO away, go install it now. But for many more users - a single-click installer, under 10-second boot and an interface that’s super simple to learn and use are way, way more important than the values of “ethical software”.

I’ll continue to maintain that Haiku is probably the best thing that will happen, I’ll also maintain that macOS is the best that’s out right now, but for the gap that’s not described with “OS of the future” and “OS that only runs on one manufacturer’s hardware”, Chrome OS Flex has come in to fill it, and I can testify - it’s not a disappointment.
