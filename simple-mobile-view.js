/*
    MIT License

    Copyright (c) 2020 でんぱ https://github.com/d3npa/simple-mobile-view-js

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

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
