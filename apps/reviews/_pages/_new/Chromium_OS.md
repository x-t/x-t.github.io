---
layout: newreview
title: Chromium OS
description: (NUKED) Popularity ≠ quality.
order: 14
previousReview: "/new/Elementary_OS.html"
nextReview: "/new/NetBSD.html"
icon: "/assets/img/icons/chromium.png"
---

# Chromium OS

*Notice: this review is nuked in favor of the [Chrome OS Flex](/reviews/extras/Chrome_OS_Flex.html) review.*

Challenges:

- Install Chromebrew
- Virtualisation or containers?

I used Chromium OS for quite a bit over the year. It is the most polished, yet also the most restrictive distro ever. You can run Linux apps, technically, also Android apps if you’re dedicated enough, however, considering other distros exist, I don’t think I like it as much anymore.

It’s hard to run anything on Chromium OS and after a little while, I think that it should only be used in select applications. “Real” Linux will most likely be better on any hardware for any purpose. Well, other than giving to a kid or someone who doesn’t know computers, probably.

## hardware

I want to talk about the fact that Chrome OS (not Chromium) runs on non-Chromebook devices too. There are projects on GitHub that will allow you to run the full Chrome experience on supported hardware. Main restraints are no Penryn (Core series +) and some hardware is unsupported. Otherwise Neverware Cloudready is a good catch-all as it supports nearly everything, however it doesn’t have a whole lot of Chrome OS features. For example, Android apps.

## challenge: linux

{% picture jpt-webp "/assets/img/new/Chromium OS.png" --link /reviews/assets/img/new/Chromium OS.png --img aria-describedby="4872f289-ef90-4747-a0c7-2c3f1f5b0d6b" --alt Failure installing Crouton (the Linux virtual machine) %}
<description class="hidden" id="4872f289-ef90-4747-a0c7-2c3f1f5b0d6b">
Image says:
Error installing Linux
Error starting the virtual machine. Please try again.
With buttons on the bottom right reading `Cancel` and `Retry`
</description>

_no_

## challenge: crew

{% picture jpt-webp "/assets/img/new/Chromium OS-1.png" --link /reviews/assets/img/new/Chromium OS-1.png --img aria-describedby="5c727758-87c5-4bca-bbb8-4e50cde23640" --alt Failure installing Chromebrew (a package manager) %}
<description class="hidden" id="5c727758-87c5-4bca-bbb8-4e50cde23640">
Image (a picture of the terminal output) says:
Error with gcc.rb: undefined method 'exitstatus' for nil:NilClass
/usr/local/bin/crew:136:in `block in print_current_package': undefined method `name' for nil:NilClass (NoMethodError)
</description>

_no_

## conclusion

I’m not going to hate on Chrome OS.

{% picture jpt-webp "/assets/img/new/Chromium OS-2.png" --link /reviews/assets/img/new/Chromium OS-2.png --alt Cloudready desktop showing the output of neofetch. %}

I think it’s fine. It’s not really there to set out to destroy all distros” or something like that. It’s Chrome OS. It’s not Windows, not macOS, not Linux, only Chrome OS. If it’s enough what you need it for, then hell, go for it. There’s really nothing else like it.
