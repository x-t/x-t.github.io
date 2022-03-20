---
layout: newreview
title: pearOS
description: Breaking all barriers of terrible.
order: 1
icon: "/assets/img/icons/pearos.png"
nextReview: "/extras/Chrome_OS_Flex.html"
---

# pearOS

_I wrote this with a fever._

```
/*
 * Sun people can't spell worth damn. "compatability" indeed.
 * At least we *know* we can't spell, and use a spell-checker.
 */


/* Uh, actually Linus it is I who cannot spell. Too much murky
 * Sparc assembly will do this to ya.
 */
```

Challenges:

- Survive.
- Consumer-level: iTunes usage.
- Prosumer-level: install Photoshop.
- Advanced-level: develop an iOS app.

As in my Elementary review, I said:

> I think the whole macOS comparison is a total farce. Elementary themselves say that the similarities are “unintentional” and I am betting money that’s total bull. But there are things that clone macOS, and there are things that imitate it.
> Pear OS, or your 2009 Windows XP Snow Leopard theme, that’s a clone. A really, really terrible one, and for good reason. You can’t just copy something huge like that. Every “macOS” theme is totally bull, as it looks nothing like macOS and looks like garbage as well.

However, I never reviewed it. In fact, I didn’t even look it up on Google even once when doing all of these reviews. I didn’t care, all I could remember is the terrible, horrid interface, and mind you, this was back when they were only trying to imitate Yosemite.

Yosemite is 7 years old now, so did they learn anything in all this time?

{% picture jpt-webp /assets/img/extras/pearOS.jpeg --link /reviews/assets/img/extras/pearOS.jpeg --alt Pear OS poster with bad-looking desktop %}

… No. Sure doesn’t look like it.

With results to copy a Mac as close as that and failing so miserably, you have to ask a few questions, mainly:

- What makes a Mac - a Mac?
- Why is such a long project failing so miserably?

I’ll try to answer these questions, but first, we need to dive to Pear straight-on, see what it is, and what it isn’t.

## website

{% picture jpt-webp /assets/img/extras/pearOS-1.png --link /reviews/assets/img/extras/pearOS-1.png --alt Pear OS homepage %}

One thing macOS is - is presentation.

{% picture jpt-webp /assets/img/extras/pearOS-2.png --link /reviews/assets/img/extras/pearOS-2.png --alt Apple macOS homepage %}

From WWDC, to the website, to the Apple Store shelves, straight onto your computer, Apple tries its hardest to present you the best they can offer.

This somehow garners Apple criticism, as somehow focusing on style and presentation makes it a “joke operating system” for “amateurs”. This is of course immediately invalidated if you’ve touched grass more than once, and if you want to clone macOS, you’ll need to clone the marketing, too.

Let’s say that Pear is… inept in doing so.

{% picture jpt-webp /assets/img/extras/pearOS-3.png --link /reviews/assets/img/extras/pearOS-3.png --alt Pear OS Contact website page with unreadable dark text on dark background %}

Pear OS doesn’t particularly have any other means of advertising, be it their own event or just… anything, other than this website. And I get the fact that their budget is not Apple’s, but this page doesn’t inspire confidence, does it?

Well, what can you do, I’ve seen worse….. I guess… Let’s just download it.

The “Versions” tab has 3 versions of “macOS”, and I want to introduce you to each one.

{% picture jpt-webp /assets/img/extras/pearOS-4.png --link /reviews/assets/img/extras/pearOS-4.png --alt Text reading Catalina with a low-resolution screenshot attached %}

Catalina I sort of hope to be the best one, considering the design wasn’t significantly changed from Yosemite, with only one iteration, when Mojave added dark mode.

Also yes, these are the full-resolution icons. Go figure. Web design, yay?

{% picture jpt-webp /assets/img/extras/pearOS-5.png --link /reviews/assets/img/extras/pearOS-5.png --alt Monterey with low-resolution screenshot %}

I… do not really have expectations for this. I mean, look at it. No.

{% picture jpt-webp /assets/img/extras/pearOS-6.png --link /reviews/assets/img/extras/pearOS-6.png --alt ThiccSur with low-resolution screenshot %}

This is Bi- Thi-..?? ThiccSur? THICK SUR? The screenshot says “Cupertino”? What- WHAT?

I just have zero words for this. I’m just gonna hope that the ISO will do the talking, because I’m not. I’m speechless.

## challenges

Challenges will be conducted throughout the 3 versions, 1 per version. I will also try comparing it to macOS.

## catalina - consumer

Why do most people with iPhones have Macs? Well, the answer is nearly always “the ecosystem”. And why not? Myself, I have been using this ecosystem for quite a while, and it’s super, super convenient. Airdrop, iMessage, Handoff, iCloud are just a few of the integration features between devices in a library of many others, too. It’s all smooth, like butter, but also, creates a walled garden, as the moment you switch off iPhone or Mac to Android or Linux, you immediately lose _all_ functionality.

Also, we don’t tend to replace everything at once, most of the time it’s just one thing - a laptop or a phone, not both. So, let’s take a seat in a consumer’s position who decided that after their Mac slowing down really bad (hypothetical btw), someone talked them into Linux, and to keep to the usual design they’re used to, they decided to install Pear OS. But, they still own an iPhone. Can you still pair them together to keep the bare minimum sync functionality?

## catalina - installation

The first thing I see after selecting to boot from USB is a KDE Neon logo. We’re dealing with a good few layers here.

Debian → Ubuntu → KDE Neon → Pear OS

Now, while Linux Mint and Pop OS has shown that a 3rd generation distro _barely_ works, there was never a distro that showed a 4th generation was even worth considering. And I’m betting $200 that today won’t be the day either.

To set up my Wi-Fi, I was greeted by a password dialog that had the 1Password logo.

{% picture jpt-webp /assets/img/extras/pearOS-7.png --link /reviews/assets/img/extras/pearOS-7.png --alt Password dialog to connect to Wi-Fi with 1Password logo %}

Then, I just continued the installation.

{% picture jpt-webp /assets/img/extras/pearOS-8.png --link /reviews/assets/img/extras/pearOS-8.png --alt Desktop of Pear OS with the installer open, showing a badly stretched promotional image %}

It’s…. a looker, isn’t it.

On first boot, I heard a startup sound. No, it isn’t the Mac chime, it’s just something random, at the very least, it’s also not absolutely terrible. I immediately ran apt update and apt dist-upgrade, as I had zero idea when was this ISO made.

## catalina - usage

{% picture jpt-webp /assets/img/extras/pearOS-9.png --link /reviews/assets/img/extras/pearOS-9.png --alt Notification reading Launching Dolphin failed %}

Yeah, immediately, accessing files gives you a “program not found”, which is interesting.

{% picture jpt-webp /assets/img/extras/pearOS-10.png --link /reviews/assets/img/extras/pearOS-10.png --alt Desktop of Pear OS Catalina with neofetch output %}

Also, it wasn’t particularly detected as anything. Just Ubuntu.

After the update, I also had problems connecting to the internet. Because for no reason at all, it decided that my DNS server will be `127.0.0.53`. In fact, after setting up the correct one, the connection just dropped. I didn’t even start the challenge and this is already really bad!

## catalina - challenge

iTunes doesn’t work on Linux natively. I know, shocker. Thus, I have to set up wine. My first shot is Crossover, as per my Fedora review, it works a lot better than anything else, so I hope that this time, it also works better.

They provide a `deb` file to install on Debian-based distributions. If we’re still pretending like we’re consumers, the first question is - can you install it without any terminal knowledge?

{% picture jpt-webp /assets/img/extras/pearOS-11.png --link /reviews/assets/img/extras/pearOS-11.png --alt Desktop of Pear OS showing browser with Crossover page open, with the downloads dialog open, and the unarchiver prompt showing contents of the downloaded deb file %}

Of course not. It just opens up the default unarchiver. What are you even supposed to do with this? I just used `apt` in the terminal and called it a day.

{% picture jpt-webp /assets/img/extras/pearOS-12.png --link /reviews/assets/img/extras/pearOS-12.png --alt Desktop screenshot with Crossover saying that iTunes has a compatibility level of Installs, will not run %}

Not promising whatsoever.

_Side-note: the performance of the desktop is absolutely woeful. The amount of animations and other crap slows it down so much, it’s choppy. Moving a window, maximizing it or minimizing it is very unpleasant and takes a lot of time. And this is a C2D with 6GB of RAM and an SSD, sure, it’s not fast, but it’s also not so slow to need to choke on the bloody desktop!_

{% picture jpt-webp /assets/img/extras/pearOS-13.png --link /reviews/assets/img/extras/pearOS-13.png --alt Desktop of Pear OS with iTunes running %}

It lives!

After plugging in my iPhone, I saw the “Trust this computer” message, which gave me some hope. However, what it ended up doing is just giving GNOME Files access to my photos and documents .

{% picture jpt-webp /assets/img/extras/pearOS-14.png --link /reviews/assets/img/extras/pearOS-14.png --alt File browser showing iPhone connected with only folder apparent DCIM %}

This means that no, you can’t really sync anything. As an alternative, all you’ve got is the iCloud Web portal.

## catalina - conclusion

Even though iTunes runs, to get to it took quite a lot, including knowing what wine/Crossover are, how to use apt to upgrade the system and install Crossover, and then it couldn’t even bother to find the phone in iTunes. A better idea is to use a USB passthrough with KVM or VirtualBox, but this is the consumer level. The horrid performance, the terrible interface, complete and utter lack of any consistency and just removing things from what is essentially Kubuntu isn’t an experience that would bring anyone to use Linux. There are way better distros than this.

## monterey - prosumer

One thing macOS is really well known for is the prosumer market. Anyone can tell you a few truths:

- FCPX is the fastest video editor on the market
- The Adobe suite runs best on macOS
- Logic Pro is an industry standard

These are just a few examples, it doesn’t include stuff like AutoCAD, CorelDRAW or others that are even more to the pro-ish side than the consumer market.

This challenge will tackle only one of these applications - Photoshop. It’s by far the most popular one, with its doings for image editing are alike with Google for the search engine. Same with all the predatory practices, as well. But still, it’s the industry standard, holds the most patents for functionality and is essentially a requirement for any industry that works with photos anywhere in the pipeline. Which is nearly everything.

## monterey - installation

Nothing new. It’s just an update, really. In fact, with the way it looks, all they did is change the wallpaper and added a couple of pixels to round off the corners on windows.

## monterey - usage

It’s still bad. It looks a tiny bit better, but still has glaringly terrible bugs.

{% picture jpt-webp /assets/img/extras/pearOS-15.png --link /reviews/assets/img/extras/pearOS-15.png --alt Desktop of Pear OS Monterey with neofetch output %}

I genuinely don’t have much to say about it. It’s terrible.

## monterey - challenge

Can I install packages without a CLI?

{% picture jpt-webp /assets/img/extras/pearOS-16.png --link /reviews/assets/img/extras/pearOS-16.png --alt Desktop of Pear OS displaying browser with Crossover page, downloads menu and unarchiver showing contents of the Crossover deb file %}

No. And I’m gonna bet, many prosumer might’ve opened up the terminal, but definitely not one on Linux, and definitely didn’t learn a single command.

Oh, and, yeah, no Photoshop on Linux. Crossover again. It’s paid software, but I think it gives the best chances to actually run things. Of course, in my opinion, you should look for alternatives, but let’s be honest, most of the time they’re

- Absolutely unusable without intense training (GIMP)
- Absolute not the same product (Inkscape)

Thus, many people will end up getting drawn towards Wine, which is very complex, and shouldn’t be given to anyone who’s not already mastered the Linux CLI, otherwise they might get more than they bargained for.

_Side-note: the desktop is still very, very slow._

You can forget the latest versions of Photoshop, as what Wine can run is just CS5. For some workloads, I assume that’s enough, but for others, it isn’t. I guess you’re disconnected from Creative Cloud, so that’s a plus, I guess?

{% picture jpt-webp /assets/img/extras/pearOS-17.png --link /reviews/assets/img/extras/pearOS-17.png --alt Desktop of Pear OS showing the 1337x.to page in the background for Photoshop CS5 with the Photoshop CS5 installer dialog open, showing installer's progress %}

{% picture jpt-webp /assets/img/extras/pearOS-18.png --link /reviews/assets/img/extras/pearOS-18.png --alt Photoshop CS5 window reading old but gold on the left with a boomer wojak on the right sipping a white can of Monster energy drink %}

## monterey - conclusion

This brought me back a bit, actually. I remember pirating stuff like this back in the day, and in fact, it might’ve even be the same torrent file that I used when I was a kid. Yeah, Pear OS is terrible, but CS5 kinda kicks ass. And Linux can run it, apparently. I can’t guarantee its stability, but it runs. Of course, if you want newer features, use macOS or Windows. There’s no way in hell GIMP is any better than CS5, let alone the modern CC releases.

## thiccsur - advanced

Another, pretty significant part of Mac users are developers. In fact, Apple dedicates an entire event to them, called WWDC. And, if all you know about WWDC is that they announce products, you’re wrong, as (at least pre-quarantine, anyway) once the lights shut off and the journalists leave the room, developers sit in and watch keynotes with tutorials and showcases of Apple’s new technologies, stuff like SwiftUI or Catalyst.

And there may be a reason why, take a look at Silicon Valley from HBO, realize how many of those machines are just Macs?

{% picture jpt-webp /assets/img/extras/pearOS-19.png --link /reviews/assets/img/extras/pearOS-19.png --alt Stack Overflow's 2021 developer survey results reading Windows 45.33%, Linux-based 25.32%, MacOS 25.19%, Windows Subsystem for Linux (WSL) 3.29%, BSD 0.18% %}

_Stack Overflow’s 2021 developer survey showing non-professional and professional developers’ operating system choice._

While the show may be a bit exaggerated, the truth is that macOS remains a very popular choice with developers, and there are many personal reasons, but one of them has to be the fact that _macOS can comfortably develop applications for every single major platform_. In fact, let’s count them.

- Windows - Parallels (Visual Studio), Visual Studio for Mac
- Linux - gtk, qt, any cross-compiler
- Mac - Xcode, Swift
- Android - Android Studio
- iOS - Xcode

While Windows and Linux can develop for nearly everything, getting macOS builds on Windows or Linux include either buying a separate Mac and remoting into it, renting one off AWS/Macstadium or using a Hackintosh/VM setup (which is technically illegal and also requires great effort). While macOS can do everything comfortably, without much fuss.

The worst of all is iOS development. Only Macs can do native iOS development, that’s just a fact. And Pear OS is literally just Linux, nothing else. Therefore, we have to cheat. How? The answer is cross-platform libraries.

While we can’t write, compile or debug SwiftUI, we can install a React Native toolkit and then somehow offload the compilation to a Mac that’s not controlled by us. And that’s what I’ll be attempting, iOS development through React Native and Expo.

Keep in mind, also, that I have never done proper mobile development, and the fact that I’m going to attempt it on probably one of the slowest distros in existence, feels like I should be paid for my efforts.

## thiccsur - usage

{% picture jpt-webp /assets/img/extras/pearOS-20.png --link /reviews/assets/img/extras/pearOS-20.png --alt Desktop of Pear OS ThiccSur showing neofetch output %}

I ran `apt dist-upgrade`, then the lock screen and dock broke. Just awful.

## thiccsur - challenge

I started with installing VSCode, Android Studio and Node as snaps. I hope that’s enough to start.

However…

{% picture jpt-webp /assets/img/extras/pearOS-21.png --link /reviews/assets/img/extras/pearOS-21.png --alt Screenshot of the terminal showing output from yarn ios which tried to install Xcode on Linux and unsurprisingly failed %}

Even though Expo says `yarn ios` - “requires an iOS device or macOS for access to an iOS simulator”, you’re actually supposed to use `yarn web`. So, there’s that.

{% picture jpt-webp /assets/img/extras/pearOS-22.png --link /reviews/assets/img/extras/pearOS-22.png --alt Screenshot of the desktop showing a terminal that expo is running the application and VSCode showing the source code of the application %}

{% picture jpt-webp /assets/img/extras/pearOS-23.jpeg --link /reviews/assets/img/extras/pearOS-23.jpeg --alt iOS Phone running the Expo application, reading Open up App.tsx to start working on your app! Pear OS is really bad! %}

Yep! It’s complete! iOS development on a Linux macOS knockoff! We’ve truly broken the barriers of sanity right there.

## thiccsur - conclusion

Yes, it is possible to develop an iOS app on Pear OS. All thanks to modern technology from Expo and React. But should you do this? Hell no. It’s so stupid, why do you want your OS to look that bad when you’re developing? It’s a joke!

## conclusion - what’s a mac?

I think looking at a Mac knockoff shows you perfectly well what a Mac is, while the knockoff isn’t. In my opinion, through the three groups of users - casual, prosumer and advanced, Mac requires the least sacrifice. We can all coexist, and we all get something good out of it.

## conclusion - why is it so bad?

I know it’s funny to just point and laugh at how bad it is, but there are reasons why it’s bad.

1. macOS is a huge project and KDE, nor Linux are good replacements - yes, the theme looks ridiculous, but can KDE even support macOS’s native theme? Is it physically possible to write a theme for such a setup that would be a pixel-perfect recreation? How much work would that entail, even just the window borders, ignoring the fact that many utilities like Finder, Dock, Terminal, Calendar, Notes and all others would need to be totally rewritten from scratch as none look the same.
2. This isn’t a project with a lot of manpower - it’s mainly lead by kids, and essentially installed by kids. As much as the website may suggest, it’s not a serious distro, you really shouldn’t be installing something this unstable on your main machine.
3. The legality of the project is questionable at best - stolen wallpapers, stolen themes and designs are nothing short of just stealing. Yeah, Windows was a bit shameless in copying the designs, as well as GNOME, but they weren’t trying to remake pixel-perfect recreations. They were just trying to copy the best bits of the interface.

So, yes. This is a bad distro. But unless they want a literal lawsuit, its terribleness is saving their ass.
