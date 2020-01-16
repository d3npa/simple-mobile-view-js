mobileStylesheetSource = "./css/mobile.css";

function createMobileStylesheet(source) {
    var head = document.querySelector("head");
    var stylesheet = document.createElement("link");
    stylesheet.setAttribute("id", "mobileStylesheet");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("href", source);
    stylesheet.disabled = true;
    head.appendChild(stylesheet);
}

function detectPortraitView() {
    // Create stylesheet if it does not already exist
    var stylesheet = document.querySelector("head > #mobileStylesheet");
    if (!stylesheet) {
        createMobileStylesheet(mobileStylesheetSource);
        stylesheet = document.querySelector("head > #mobileStylesheet");
    }

    // Enable/disable stylesheet depending on window proportions
    width = window.innerWidth;
    height = window.innerHeight;

    // Disable stylesheet if window is not in portrait mode
    portrait = (height > width || width < 700);
    stylesheet.disabled = !portrait;
}

// Add listeners. Source: https://stackoverflow.com/a/4722710
if (window.addEventListener) {
    window.addEventListener("resize", detectPortraitView, false);
} else if (window.attachEvent) {
    window.attachEvent("onresize", detectPortraitView);
}

// Run once when script is first loaded
detectPortraitView();
