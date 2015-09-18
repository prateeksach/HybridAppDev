# Hybrid App Development Workshops
Seminars on Hybrid App Development (EECS 441). This Git will contain all my sample code and slides.
Hope you guys enjoy it. Feel free to send feedback and submit pull requests if you want to!

***

Environment Setup
-----------------
I have a Mac and I've seen a lot of errors. This installation guide is my first attempt to annotate
it all. Quick warning that this may not work for everyone so I'm adding troubleshooting notes. If you encounter unique errors, tell me and we can update this guide for others!

Troubleshooting Notes
-----------------

You will be using Terminal a lot (for installing and setting up dev environments but it is way easier to use
Sublime for actual development instead of vim or emacs). Before you get started, here are some quick ways to troubleshoot:

* You are installing a lot of system tools so if a step doesn't work (like the verification ones), try opening a fresh, new Terminal window so that the changes can take place
* For Mac, when you run a `sudo` command, it'll ask for a password. When you type, you won't see anything happen but it's actually entering the password (just hidden for security).
* Google it. You will not be the first person to encounter any error. Really. All the answers lie on StackOverflow (and I use that all the time). If you can't find the answer after a few attempts, email me.

Installation Guide
-----------------

Follow this guide and let me know if you encounter any issues. 

* Install Node.js v0.12.7: [Download it here](https://nodejs.org/dist/v0.12.7/)
	* For Mac, download the .pkg file
	* For Windows, download .msi file
* Confirm you have Node by typing `node --version`
* Node should automatically install Node Package Manager (abbreviated as NPM, which is another terminal tool we will be using). Confirm that you have it by running `npm --version`
* Now, run `npm install -g cordova ionic bower gulp` (it might take a minute)
* Few notes for Mac users from experience,
	* If you're on Mac and it gives you a permission error, do the same thing with sudo: `sudo npm install -g cordova ionic bower gulp`
	* If you have xCode installed, also run this `sudo npm -g install ios-sim` but don't worry if you get an error or anything
	* For those who don't have xCode, you will need it in the near future if you want to install the app on the device/emulator
* Confirm it works by typing `ionic --version` and if it doesn't give an error, you're good.
* You're basically set. If this is the first time you've ever heard of NPM and Node, don't worry, I'll go over it in the first workshop. If you have heard about it, check this out and play around with it: [Ionic Framework Get Started Guide](http://ionicframework.com/getting-started/) -- this is the primary technology we will be using in Terminal and it'll do a lot of things!
