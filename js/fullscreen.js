(function() {
    'use strict';
    document.addEventListener("fullscreenchange", function() {
        if (document.fullScreenElement) {
            toFaCompress();
        } else {
            toFaExpand();
        }
    });
    document.addEventListener("mozfullscreenchange", function() {
        if (document.mozFullScreen) {
            toFaCompress();
        } else {
            toFaExpand();
        }
    });
    document.addEventListener("webkitfullscreenchange", function() {
        if (document.webkitIsFullScreen) {
            toFaCompress();
        } else {
            toFaExpand();
        }
    });
    document.addEventListener("msfullscreenchange", function() {
        if (document.msFullscreenElement) {
            toFaCompress();
        } else {
            toFaExpand();
        }
    });

    function toFaCompress() {
        $("#fullscreen-icon").toggleClass("fa-compress");
    }

    function toFaExpand() {
        $("#fullscreen-icon").toggleClass("fa-expand");
    }
})();
// Checks if the document is currently in fullscreen mode
let isFullScreen = function() {
    return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}
let elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function fullScreen() {
    if (isFullScreen()) {
        closeFullscreen();
    } else {
        openFullscreen();
    }
}