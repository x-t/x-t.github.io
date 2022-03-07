---
layout: newreview
title: Elementary OS
description: A shocking surprise.
order: 13
previousReview: "/new/Zorin_OS.html"
nextReview: "/new/Chromium_OS.html"
icon: "/assets/img/icons/elementary.png"
---

# Elementary OS

Challenges:
- Run it on a MacBook. That’s what they want, don’t they?
- Set up a distcc container

Best known for its “super sleek user interface” which may or may be a clone of macOS, Elementary is once again, Ubuntu with a different shell. So once again, this is another Ubuntu test.

However, since it is a clone of macOS, I’ll actually throw it on Mac hardware. This will test its actual capabilities. It’s a 2013 MacBook Pro, which supports up to Big Sur (and online reports say that Monterey with patches runs even better). So this will be able to test HiDPI scaling, Broadcom drivers and other pieces of hardware. I remember I ran Ubuntu on this laptop before, with varying degrees of success. I doubt Elementary will do any better, but let’s hop on.

## does it work?

Yeah. It works. HiDPI is fine, although macOS has a lot more options (there’s only 1x, which is unreadable, 2x, which is 1280x800 and 3x which....... no). Wi-Fi doesn’t, however. Maybe I’d need to get the Broadcom drivers installed from the actual installer, not Live USB, however it wouldn’t boot the install from an SD card and I’m not wiping my drive for this.

Thus, the rest will be done on the Thinkpad. Again.

## installer

Although it is only a debootstrap wrapper, the amount of polish is actually really, really nice. Other than the “custom” option requiring you to understand GParted, it actually is really good, I liked it a lot. Clean, simple, nice to use. Unlike let’s say, the Fedora one, where you have to confirm changes to disk before partitioning them. Yeah idk either.

I also appreciate it encouraging disk encryption. That’s really good practice. I didn’t to it because of speed, though, so I can’t say about the process.

## pantheon

I know that I have quite a lot against Pantheon from past experience.
But I also know that I need to stay unbiased and truthful.

I hate it.

I hate the fact at how good it is.

This runs circles around anything other than GNOME. GNOME in my opinion has gotten a lot better, but what you get out of the box is pretty useless and ugly, and on older/slower hardware it's slow.

I really hate how good Pantheon is. This isn’t totally pointless like Zorin. The fact that it’s based on Ubuntu LTS in this sense doesn’t make it boring or a yet another Ubuntu. It’s a stable base to a good DE. Sort of like Solus, although, I don’t know if that’s stable.

I think the whole macOS comparison is a total farce. Elementary themselves say that the similarities are “unintentional” and I am betting money that’s total bull. But there are things that clone macOS, and there are things that imitate it.

Pear OS, or your 2009 Windows XP Snow Leopard theme, that’s a clone. A really, really terrible one, and for good reason. You can’t copy something huge like that. Every “macOS” theme is totally bull, as it looks nothing like macOS and looks like garbage as well.

Pantheon is NOT a macOS clone. If I had to chalk it up, it’d be more of a GNOME clone if anything. macOS doesn’t have an application menu or a clock on the top middle.

It’s seriously only some tech journalists and articles that keep perpetuating it as a macOS clone. If you want one, you’ll be disappointed. But I really, really never wanted one. Because I know what happens when you try to copy macOS.

## the challenge

{% picture jpt-webp "/assets/img/new/Elementary OS.png" --link /reviews/assets/img/new/Elementary OS.png --alt Terminal output showing a running container and two built images - Debian and distcc. %}

*The container runs.*

{% picture jpt-webp "/assets/img/new/Elementary OS-1.png" --link /reviews/assets/img/new/Elementary OS-1.png --alt Terminal output showing invoked distcc command returned with 'Segmentation fault' %}

*Somehow build-essential isn’t a dependency, and without it, it fails.*

{% picture jpt-webp "/assets/img/new/Elementary OS-2.png" --link /reviews/assets/img/new/Elementary OS-2.png --alt Terminal output showing a recognised IP address in distcc configuration, but still compiling using localhost. %}

*I still wasn’t able to test it, it kept giving it over to localhost. Oh well, whatever.*

## conclusion

{% picture jpt-webp "/assets/img/new/Elementary OS-3.png" --link /reviews/assets/img/new/Elementary OS-3.png --alt Elementary OS desktop showing the output of neofetch. %}

Well, well, well. How the tables turn. Yeah, it’s still X11 (although a lot of work is being done to move over to Wayland), it’s still Ubuntu, but hell, it’s actually pretty cool.

Give it a shot without putting in mind all of the articles online about it. It’s absolutely a fun distro.
