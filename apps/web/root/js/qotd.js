// x-t.github.io (c) 2024
// This work is licensed under the Creative Commons 
// Attribution-NonCommercial-ShareAlike 4.0 International 
// License. To view a copy of this license, visit 
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or 
// send a letter to Creative Commons, PO Box 1866, 
// Mountain View, CA 94042, USA.

var qotd = [
":3 - zxyz",
"meow :3 - zxyz",
"mrow :3 - zxyz",
"In this town, nobody is awake at night. - Terry A. Davis",
"Entertain God as an act of love to God. - Terry A. Davis",
"I hate cryptology. It distracts people from useful work. - Terry A. Davis",
"It's okay. God always gets His way. Be patient. - Terry A. Davis",
"I fight Satan and kick his ass. - Terry A. Davis",
"You must live outside your comfort zone. - Terry A. Davis",
"I do not know what my reality is, but God is God. - Terry A. Davis",
"I am beautiful. I hope. - Terry A. Davis",
"Jesus replied: \“‘Love the Lord your God with all your heart and with all your soul and with all your mind.’ - Matthew 22:37",
"I know we will win. I know the enemy will be punished. - Terry A. Davis",
"Русский военный корабль, иди на хуй - Roman Hrybov",
"There is no system but GNU and Linux is one of it's kernels - Richard M. Stallman",
"Geeks like to think that they can ignore politics, you can leave politics alone, but politics won't leave you alone. - Richard M. Stallman",
"I've become an animal. Socializing sucks. - Terry A. Davis",
"Those that can, do. Those that can't, complain. - Linus Torvalds",
"All operating systems sucks, but Linux just sucks less - Linus Torvalds",
"Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.\” - Deuteronomy 31:6",
"Allah does not burden a soul beyond that it can bear - Quran 2:286"
];

window.onload = function() {
   document.getElementById("qotd").innerText = qotd[Math.floor(Math.random() * qotd.length)];
}