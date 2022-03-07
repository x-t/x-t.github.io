---
layout: newreview
title: Solus
description: Something to prove.
order: 9
previousReview: "/new/Debian.html"
nextReview: "/new/OpenBSD.html"
icon: "/assets/img/icons/solus.png"
---

# Solus

Challenges:

- Run an app in Kubernetes

I do not know much about Solus. One thing I know for sure is that I never really used it. I tried it once at around 2017, and I took it as a sort-of joke. It completely broke my GRUB config, although, I don’t blame it for that. I was dual-booting with Manjaro. I’m sure it’ll do it well enough now (it wanted to dual-boot with Debian, the previous review) but I will not comment on its installer abilities.

Another thing I know about Solus is that it sort of became a meme on /g/. Maybe it was the European timezone when I was looking at its content, but one shill, Kevin, managed to make the name stuck in my head.

{% picture jpt-webp "/assets/img/new/Solus.jpg" --link /reviews/assets/img/new/Solus.jpg --alt Kevin's big fat face with a cap reading 'MEME LORD' %}

_Pictured: Kevin, average Solus user_

The thing about Solus, is that it isn’t a deadbeat N-th child distribution. It’s not based on anything, has its own package manager and develops its own desktop environment. That’s sort of incredible, and I’m really amazed that I never gave it that much of a chance.

## budgie

So about that desktop environment. What is it? Well, all I can say about it is it’s sort of just... Cinnamon. It’s not a fork of GNOME, but, it might as well be, as it’s nearly the same. It doesn’t run on Wayland, so, even though I don’t give points, consider it a deduction. Like, seriously, considering even MATE that’s literally based from GTK2 is slowly inching away from X11 makes this inexcusable. But considering these same guys have to work on the distro at the same time too, I can’t blame them _too_ much.

{% picture jpt-webp "/assets/img/new/Solus-1.png" --link /reviews/assets/img/new/Solus-1.png --alt Terminal command 'echo $WAYLAND_DISPLAY' showing no output, indicating that Wayland isn't running. %}

I have to play devil’s advocate, however. It looks... stunning. Theming is consistent, fonts are good, I genuinely like how it looks. Solus does have other choices of desktop environments, but, I don’t know why you’d bother...

{% picture jpt-webp "/assets/img/new/Solus-2.png" --link /reviews/assets/img/new/Solus-2.png --alt Solus/Budgie desktop showing neofetch output. %}

_No, seriously, this looks amazing. Such a shame it’s X11-only._

{% picture jpt-webp "/assets/img/new/Solus-3.png" --link /reviews/assets/img/new/Solus-3.png --alt Solus/Budgie desktop broken with default icons and an Adwaita theme. %}

_Oh god, I broke it._

## the challenge

I have never worked with Kubernetes. I have worked with Docker and containers, sure, but Kubernetes? Absolutely not. And I think the reason is that the saying goes “you don’t need Kubernetes”. And that’s the truth, most of the time the scalability of your applications don’t matter. k8s is expensive. Like really expensive. It’s hard to get working, because it’s not meant to be friendly for anyone. It’s a tool used for horizontal scaling and resiliency, you don’t need it. It’s much cheaper and easier to use things like serverless and/or static JAMStack, so you don’t need to pick up an entire book, read it front-to-end and still understand nothing.

{% picture jpt-webp "/assets/img/new/Solus-4.png" --link /reviews/assets/img/new/Solus-4.png --alt Terminal output from 'minikube start' %}

Now to get started, I installed minikube, which is specifically made to run a local cluster on your OS. Then I followed surprisingly clear instructions to deploy a stock application.

{% picture jpt-webp "/assets/img/new/Solus-5.png" --link /reviews/assets/img/new/Solus-5.png --alt Firefox window with the Kubernetes management web UI %}

_This has a GUI??_

{% picture jpt-webp "/assets/img/new/Solus-6.png" --link /reviews/assets/img/new/Solus-6.png --alt Firefox window with some random echo API running on Kubernetes %}

_I guess I’m running.... something? What am I looking at here?_

To say that Kubernetes is confusing is an understatement.

Truth be told, I should probably put some time into learning this. There are many, many resources to do so online, with interactive demos, interactive free VMs and all other jazz. It’s not hard to learn, I’ll say it like that.

But, I did it. I put something, I don’t even know what, on Kubernetes, on Solus, and it works. Brilliant.

## conclusion

Yeah, this challenge was sort of a farce. It took like 4 terminal commands and I didn’t even know what I did, but with the amount of operating systems, you gotta know that there will be some pretty bad challenges. However, spending less time with distros might help them, so I get to experience less of their badness.

And anyway, Solus and Budgie made good first impressions. eopkg is pretty likable, Budgie looks great and Solus looks like a fun thing to be invested in. I don’t think I’ll move over to it, but I might consider Budgie as my next DE. Although, I might pick GNOME instead. Although, what am I talking for, I’m still doing pretty much everything on a Mac, a second install of Linux is pretty useless, innit?
