---
layout: newreview
title: Windows 11
description: This is the last one, for sure.
order: 18
previousReview: "/new/Solaris.html"
nextReview: "/new/Gentoo.html"
icon: "/assets/img/icons/windows11.png"
---

# Windows 11

Challenges:

- Install it on veeeery unsupported hardware (C2D, GMA)

“Windows 10 is the last version”, they said. “But N years later we’ll release 11”, they never said.

Considering that relatively 11 is a visual overhaul, and even then, not that big, why did they break the promise and break out of the 10? Well, my theory is the fact that they want to stop supporting old hardware. Back this up with the minimum system requirements. Introduction of virtualisation-based security. A whole lot of it is moving Windows into a more secure landscape, a more modern landscape. But going there requires the whole shtick to be blown.

Windows is known for its resilient backwards compatibility. You can’t name a file or folder CON, because back when MS-DOS didn’t even have folders yet, piping a file to > CON would put it somewhere, idk, print it? I don’t care for any of it. Of course, the argument rises up - why? Because no computer running MS-DOS 0.01 would ever run Windows 10, so why can’t I name a folder CON?

Maybe someone finally woke up in Microsoft after the 2 billion’th ransomware attack that something had to be done, because companies will never stop hiring 1 cybsec staff, a poor bloke who couldn’t care less about your security as you’re paying them less than the fine you’ll need to pay after the government audits your woeful security.

However, Windows fans are made up of 10-14 year old children, and thus, cannot afford big and expensive 11th+ Intel CPUs that could support actual security and TPM. But this comes to my advantage, as I can try and install Windows 11 too, try it out, until I eventually realise that nothing changed and should go back to macOS. So, let’s get started.

## installation

It was easier than I thought it would be. Rufus literally has an option to create an USB that removes all minimum requirement checks, and thus it installs effortlessly on a

- TPM-less
- UEFI-less
- SSE4.2-less
- AVX2-less

system.

## conclusion

{% picture jpt-webp "/assets/img/new/Windows 11.png" --link /reviews/assets/img/new/Windows 11.png --alt Windows 11 desktop showing the output of winfetch. %}

I kind of like it. I wouldn’t really mess around with the support, as any minute Microsoft can completely blocklist hardware off WU and you will be stuck there that’ll be less secure than XP. But as long as it is, it runs fine.

Not on this hardware, though, no. High CPU usage makes it a bit of a pain, VT-x/VT-d still glitches out the graphics drivers, and most importantly the trackpoint drivers on Thinkpads suck (all of them), and take a long while and 3+ utilities to get working as well as Linux gives you out of the box on any distro.

I like the way Windows is finally going, it’s still a legacy mess, but getting rid of the old, introducing newer, more polished software and features are a must, and considerably, 5 years too late. I also like the new design language, as personally I thought Metro was soulless pseudo-design made to be manufactured out as fast as possible. At least in Windows 8, Metro had a whole lot of soul with color and funky shapes, 10 stripped it all out with a blue/white/black color scheme that looked like absolute garbage. 11 adds color, rounding, language, soul.

Still not using it though.
