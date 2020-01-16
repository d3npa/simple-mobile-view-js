# simple-mobile-view-js
A smooth, refresh-less JS snippet for implementing a mobile view.

## How it works
`simple-mobile-view.js` works by enabling/disabling a designated stylesheet (`head > link#mobileStylesheet`) depending on the window's width/height ratio. It registers
a handler for `window.onresize` in order to update whenever the window is resized.

## Usage
Have an existing stylesheet for large (landscape) screens:
```css
/* /css/theme.css */
body {
    background-color: #111; /* Almost Black */
}
```

Create seperate stylesheet for mobile (portrait) screens:
```css
/* /css/mobile.css */
body {
    background-color: #4ff; /* Dark Red */
}
```

Include script into page:
```html
<link rel="stylesheet" href="/css/theme.css">
<link rel="stylesheet" href="/css/mobile.css" id="mobileStylesheet">
<script type="text/javascript" src="./js/simple-mobile-mode.js"></script>
```

That's it!

## License
Please review the attached [MIT license](./LICENSE).
