---
layout: newreview
title: Debian
description: The ol' reliable.
order: 8
previousReview: "/new/Ubuntu.html"
oldReview: "/old/debian.html"
nextReview: "/new/Solus.html"
icon: "/assets/img/icons/debian.png"
---

# Debian

Challenges:

- Create an AD-DC Principal Server
- Connect two Debian containers to it

I have to say, I’m not new to Debian. Nor have I really forgotten anything. My home server (a Raspberry Pi) has been running nearly 24/7 for quite a few years with a copy of Raspbian, which is Pi-optimised Debian. I like Debian, a lot. I like the size of its community, the amount of packages, the good deal of stability and great support for non-x86 ISAs. A lot of people agree with me, especially cloud providers, where portability, stability and power management are all very crucial, as in an environment where you can save pennies off one server, you’ll save thousands off one datacenter.

## hardware

Debian is interesting in the hardware department, as it shies away from including proprietary firmware, which makes a lot of things not work, but will allow it to run anyway. It’s in the weird meta-position of being with FSF, but also not, as the FSF doesn’t recommend it as “how easy it is to run non-free firmware”. Personally I don’t understand this position, as it makes people go download the firmware CD image and completely ignore whatever mission statement there is from “truly-free software”. All you have to do is include the damn firmware by default.

## challenge 1: ad/dc

I’ve never done a single AD/DC server in my life. I installed the AD Forest role on Server 2022 once, and I screwed it up beyond belief. Some people also have done the same as me and everyone in the forum had only one suggestion. “Reinstall the OS”. Yeah. I wasn’t going to do that. Anyway, maybe Linux can do it a bit better?

Well, I followed this guide: [https://blog.dftorres.ca/?p=220](https://blog.dftorres.ca/?p=220)

{% picture jpt-webp "/assets/img/new/Debian.png" --link /reviews/assets/img/new/Debian.png --alt Debian desktop with terminal output showing all Active Directory groups and users inside the Administrators group. %}

The server seemed to set up fine, but I couldn’t get Windows to recognise it.

{% picture jpt-webp "/assets/img/new/Debian-1.png" --link /reviews/assets/img/new/Debian-1.png --alt Windows Powershell output resolving DNS of ad.x200.lan, but not being able to ping it. %}

After some fiddling about, I realised it was trying to use the IPv6 resolver, not IPv4, after sorting that out, I joined the domain successfully.

{% picture jpt-webp "/assets/img/new/Debian-2.png" --link /reviews/assets/img/new/Debian-2.png --alt Windows desktop showing whoami as x200\administrator, as to show a successful login through a domain. %}

_>tfw too foolish to set up microsoft products on windows, but smart enough to set them up in linux_

Anyway, off to the containers!

## challenge 2: samba-in-a-box

Well, the first step is to figure out how to do the networking. I somehow had to set up a Docker and local network so that Docker containers would be on the same LAN and be able to contact the host (for DNS & services). I ended up with a weird combination of macvlan which would allow me to connect to the internet, containers and the host, but not my LAN. Oh well, didn’t need that one anyway. Although, I later noticed that the container didn’t have access to the internet, so to fix that I connected it to a second bridged network.

Truth be told, this was absolutely hopeless. The fact that AD barely works on Linux alone makes it absolutely impossible to work with in a container. The lack of init, dbus and well..... everything completely turns into a nightmare really fast. Plus Docker was never particularly meant for these shenanigans anyway, so all I can really do is use virtualisation instead.

## challenge 2.5: samba-in-a-bigger-box

I tried KVM at first. Turns out bridging Wi-Fi adapters is nearly impossible. So I’m cheaping out with VirtualBox.

{% picture jpt-webp "/assets/img/new/Debian-3.png" --link /reviews/assets/img/new/Debian-3.png --alt Debian desktop showing a VirtualBox remote connection with a virtual machine installing Debian. %}

_Hey, I didn’t use the GUI though! Do I get extra points for that?_

```
vboxmanage createvm --name debian1 --ostype Debian_64 --register --basefolder /home/zxyz/debian1
vboxmanage modifyvm debian1 --ioapic on --memory 1024 --vram 128
vboxmanage createhd --filename /home/zxyz/debian1/debian1.vdi --size 32000 --format VDI
vboxmanage storagectl debian1 --name "SATA Controller" --add sata --controller IntelAhci
vboxmanage storageattach debian1 --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  /home/zxyz/debian1/debian1.vdi
vboxmanage storagectl debian1 --name "IDE Controller" --add ide --controller PIIX4
vboxmanage storageattach debian1 --storagectl "IDE Controller" --port 1 --device 0 --type dvddrive --medium /home/zxyz/Downloads/firmware-11.1.0-amd64-netinst.iso
vboxmanage modifyvm debian1 --boot1 dvd --boot2 disk --boot3 none --boot4 none
vboxmanage modifyvm debian1 --vrde on --vrdemulticon on --vrdeport 10002 --nic1 bridged --bridgeadapter1 wls1 --paravirtprodiver kvm
vboxheadless --startvm debian1 &
rdesktop -u a 127.0.0.1:10002
```

It’s quite a lengthy procedure compared to KVM, actually.

After messing about with this for literally 4 hours, I genuinely couldn’t get it to work. I even tried it on Ubuntu, which has support for this stuff “natively” and this is what I got.

{% picture jpt-webp "/assets/img/new/Debian-4.png" --link /reviews/assets/img/new/Debian-4.png --alt Ubuntu setup saying 'Failed to connect to domain'. %}

Thus, I’ll end it here, because this has nothing to do with Debian anymore, it’s a hellish Microsoft product. Maybe it’ll make a comeback, maybe not. All I can say is that Debian works.

## conclusion

{% picture jpt-webp "/assets/img/new/Debian-5.png" --link /reviews/assets/img/new/Debian-5.png --alt Debian MATE desktop showing the output of neofetch. %}

It’s the same as I remember. Outdated packages, unnecesaryy package splitting by license, weird philosophy. It works great, tho, still, maybe consider using RHEL if you’re on x86, otherwise, yeah, Debian’s good enough.
