---
layout: newreview
title: Void Linux
description: My Little Disappointment.
order: 4
previousReview: "/new/FreeBSD.html"
oldReview: "/old/void.html"
nextReview: "/new/Windows_7.html"
icon: "/assets/img/icons/void.png"
---

# Void Linux

Challenges:

- Local homelab-in-workstation setup (PHP, nginx, KVM (libvirt), podman)

Back in the day I gave Void a glowing review, however now that I’ve had some time to think about it, it’s absolutely written out of desperation. I remember the system literally freezing and not being able to do anything other than to hard-reset it. And it wasn’t even a one-off, I’ve read that this is somehow a common issue shared between multiple people. It is somewhat foolish how I considered _this_ to be the best available.

Immediately before I could even think of runit or anything else I was met with the fact that the default installer has outdated root certificates and I couldn’t update the system. Great. However, once I got it up and running I was met with... everything the same as I used to have. So, this is more or less my opinion changing, not the distro. And thus...

## the installer

It doesn’t work. Forget about Wi-Fi, it can’t set that up, do it manually, you will also have to modify the installer to bypass the network section, otherwise all it’ll do is keep setting it up and failing to do anything. It’ll also fail to detect your network, that’s because HTTPS doesn’t work, as the default ISO _still_ uses outdated root certificates (as of 2021/10/14). Once you get through the walking “what were they thinking?!?” moment, you get thrown to a blank install, have fun installing X11 yourself. Oh well, I’m not new to that.

## hardware

This will not be a recurring section, because Linux distros support a lot of hardware, and support it well, however somehow Void makes it worse? It takes effort to get anything working, probably because it uses ancient garbage like wpa_supplicant or....... ALSA........... oh god.

## the challenge

This is a long one, but I did it in under half a day. I wouldn’t need a GUI for this, but I know that for some developers they might use their own machine, so I had to do this all in an XFCE install. Mind you, I did nearly all of this (aside from SPICE monitors) in the terminal.

## nginx

Simple enough, nearly nothing changes, apart from the fact that you’re using runit, not systemd.

```
xbps-install -S nginx # install nginx
ln -s /etc/sv/nginx /var/service/nginx # equivalent to systemctl enable --now nginx
```

{% picture jpt-webp "/assets/img/new/Void Linux.png" --link /reviews/assets/img/new/Void Linux.png --alt Safari window showing 'Hello from Peter!' in location lb.x200.lan %}

{% picture jpt-webp "/assets/img/new/Void Linux-1.png" --link /reviews/assets/img/new/Void Linux-1.png --alt Safari window showing 'Hello from Louis!' in location lb.x200.lan %}

_Load balancer setup with two IIS VMs through nginx._

## KVM

Once again, install libvirt, qemu and virt-manager (this is the CLI utilities, not GUI), enable the services and you’ll have the same experience as in any RHEL-based distro.

{% picture jpt-webp "/assets/img/new/Void Linux-2.png" --link /reviews/assets/img/new/Void Linux-2.png --alt Side-by-side two Windows Server Core 2022 VMs in a Void/XFCE desktop. %}

_Two KVM VMs running Windows Server 2022 in virt-viewer via SPICE_

I used these VMs to run identical IIS sites, for use in an nginx round-robin load balancer seen above.

## podman

I didn’t test the systemd integration (which I’m guessing is probably absent), but it worked fine enough for the container that I used.

```
podman run —name phpcont -d -p 5050:80 -v /opt/php:/var/www/app docker.io/romeoz/docker-nginx-php
```

{% picture jpt-webp "/assets/img/new/Void Linux-3.png" --link /reviews/assets/img/new/Void Linux-3.png --alt Safari window showing a phpinfo() page in location x200.lan with system 'Linux/Ubuntu' %}

_Used this container for a proxy_pass to run PHP code._

## conclusion

This is how the infrastructure ended up

{% picture jpt-webp "/assets/img/new/Void Linux-4.png" --link /reviews/assets/img/new/Void Linux-4.png --img aria-describedby="788c16a5-b256-4d45-bc59-4031ee8aab64" --alt A graph showing connections %}

<description class="hidden" id="788c16a5-b256-4d45-bc59-4031ee8aab64">
Three boxes - KVM, podman, nginx
KVM box contains: IIS LB1 & IIS LB2
podman box contains: PHP Container
nginx box self-contained
IIS LB1 & OOS LB2 are connected to a triangle, which is connected to nginx
PHP Container is connected to nginx
</description>

I guess I shouldn’t be surprised that it all ran fine, it is a Linux distro, however I never thought that because of the unique and niche community/usage of Void would actually bother with podman or libvirt support for runit.

If it isn’t obvious enough, that’s Void’s only selling point. Lack of systemd. If you actually like/want/tolerate/accept-that-it’s-the-best systemd, then you probably won’t be using this distro. And considering all of its faults, including a non-working installer, it’s not even the best systemd-free distro available on the market. It’s nearly impossible to get it working (mind you I completely threw audio support out the garbage, because I couldn’t figure out how to install/setup Pulseaudio with runit), and once you do, you’re still met with mediocrity.

I can’t help but think that it’s not a good distro, at all. It doesn’t have a place anywhere, it’s too unstable for a server, too unstable for a desktop and too high-level for anyone interested in learning a new environment (systemd-free administration). I think you can closely compare this more to a BSD than any Linux distro, but even then, at least BSDs are stable, while Void isn’t.

{% picture jpt-webp "/assets/img/new/Void Linux-5.png" --link /reviews/assets/img/new/Void Linux-5.png --alt Void/XFCE desktop showing output of neofetch %}

The solution for all of this is to accept systemd’s superiority. It’s faster, easier and more secure. Then you can use actually good distributions. End of story.
