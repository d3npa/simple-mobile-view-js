function detectPortraitView() {
    var stylesheet = document.querySelector("head > link#mobileStylesheet");
    if (stylesheet) {
        // Enable/disable stylesheet depending on window proportions
        width = window.innerWidth;
        height = window.innerHeight;
        // Disable stylesheet if window is not in portrait view
        portrait = (height > width || width < 700);
        stylesheet.disabled = !portrait;
    }
}

// Add listeners. Source: https://stackoverflow.com/a/4722710
if (window.addEventListener) {
    window.addEventListener("resize", detectPortraitView, false);
} else if (window.attachEvent) {
    window.attachEvent("onresize", detectPortraitView);
}

// Run once when script is first loaded
detectPortraitView();
