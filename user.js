// ==UserScript==
// @name         Twitter and Tweetdeck #OldTwitter Avatar
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Bring the old square Avatar back to Twitter and TweetDeck! 
// @author       @leonelsr
// @match        https://tweetdeck.twitter.com/
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nse = document.createElement('style');
    document.head.append(nse);
    nse.sheet.insertRule('.avatar, .ProfileAvatar, .ProfileAvatar-image { border-radius: 5% !important; }', 0);

    var bd = document.querySelector('.edge-design');
    if (bd) {
        bd.classList.remove('edge-design');
    }
})();