# video-speed-changer-js
Javascript script to run on any webpage having video element, and take control of the video speed.

---

## How to use?
copy main.min.js content to your clipboard

### Method 1:
go to the webpage where video is playing type `javascript:` in the address bar and paste the script after colon(:).

### Method 2:
open developer tools `ctrl+shift+i` or `right-click + inspect element` then go to console -> paste the script and hit enter.

---

## What this script do?
this script will add a button **Change Speed** on the webpage, button visibility can be toggled by `shift+q` key bindings.

on button click dialog box will pop up and show the current speed and buttons to increase and decrease speed by 0.1

## Additional Info
some webpages will rollback to their default speed because of video quality change, switch to fullscreen or normalscree, so this script will check for changes every 5sec and update the video element playback speed.
