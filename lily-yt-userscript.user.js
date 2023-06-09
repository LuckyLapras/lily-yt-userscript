// ==UserScript==
// @name         new subbox sucks
// @namespace    http://github.com/LuckyLapras/lily-yt-userscript
// @version      0.2
// @description  fuck google
// @author       twitter user @_kobe_san
// @match        https://www.youtube.com/feed/subscriptions
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

/*(function() {
    'use strict';
    function onresize() {
        var page = document.getElementById("page-manager");
        var style = window.getComputedStyle(page);
        let pw = parseInt(style.getPropertyValue('width'), 10);
        let thumbw = Math.floor(pw / 6);
        var margin = pw % 6;
        document.body.appendChild(document.createElement("style")).innerHTML=`
        ytd-rich-grid-row{
            display:inline-block;
            width:min-content;
        }
        div#contents.ytd-rich-grid-row{
            margin:0;
        }
        ytd-rich-item-renderer{
            width:${thumbw}px;
            margin:${margin}px;
        }
        #video-title.ytd-rich-grid-media{
            font-size:14px;
            line-height:initial;
        }
        #text.complex-string.ytd-channel-name,ytd-video-meta-block[rich-meta]#metadata-line.ytd-video-meta-block{
            font-size:12px;
            line-height:initial;
        }`
        debugger;
    }
    window.onload = onresize;
    window.onresize = onresize;
    })();*/


(function() {
    document.body.appendChild(document.createElement("style")).innerHTML=`
    ytd-rich-grid-row{
        display:inline-block;
        width:min-content;
    }
    div#contents.ytd-rich-grid-row{
        margin:0;
    }
    ytd-rich-item-renderer{
        width:202px;
        margin:9px;
    }
    #video-title.ytd-rich-grid-media{
        font-size:14px;
        line-height:initial;
    }
    #text.complex-string.ytd-channel-name,ytd-video-meta-block[rich-meta]#metadata-line.ytd-video-meta-block, span.inline-metadata-item.style-scope.ytd-video-meta-block{
        font-size:12px;
        line-height:initial;
    }`
})();
