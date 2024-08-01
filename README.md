# `<browser-mockup>`
A custom `HTMLElement` that mocks the appearance of browser "chrome" for screenshots and demonstrations.

![Screenshot of browser-mockup element](./doc-assets/001.webp)

## Quick Reference
```html
<browser-mockup url="https://www.mysite.com" tabs="2" collapsed-tabs="3"></browser-mockup>
<script type="module" src="/path/to/browser-mockup[.min].js"></script>
```

## Demo
https://catapart.github.io/magnitce-browser-mockup/demo/

## Support
- Firefox
- Chrome
- Edge
- <s>Safari</s> (Has not been tested; should be supported, based on custom element support)


## Screenshot Utility
Load a webpage, or raw html/css into a browser mockup in the screenshot demo:  
https://catapart.github.io/magnitce-browser-mockup/demo/screenshot.html

The Screenshot Utility can be used to pose a mockup in 3D space, and provides controls for common features like the main tab's label, and the action button variations.
![Screenshot of browser-mockup element, tilting](./doc-assets/002.webp)
![Screenshot of browser-mockup element, scaling](./doc-assets/003.webp)
![Screenshot of browser-mockup element, with many tabs](./doc-assets/004.webp)

This utility is unrelated to functionality of the actual `<browser-mockup>` element. It is intended for generating images in the limited circumstances where the images it renders are of acceptable quality for their intended uses.

## Styling
The `<browser-mockup>` element uses the `shadowDOM` to obfuscate the decorative elements from the content elements. For convenience, all elements rendered in the `shadowDOM` have been given `part` attribute values, so that they can be accessed using the CSS `::part()` selector.

For the most common use-cases, css properties (variables) are used which can be overridden on the `<browser-mockup>` element.  
See the property names, and their default values, below :
```css
browser-mockup
{
    --border-radius: 5px;
    --margin: 1em;
    --shadow-color: rgb(0 0 0);
    --box-shadow: 0 0 15px -3px var(--shadow-color);

    --background: canvas;
    --border-color: canvastext;
    --header-background: #2b2b2b;
    --header-font-color: #868686;
    --url-color: #313131;
    --tab-background: #181818;
    --tab-selected-background: #1f1f1f;
    --tab-highlight: #0078d4;
    --tab-selected-font-color: #d7d7d7;
}
```

For styling parts, here are the css selectors for each part:
```css
browser-mockup::part(header) { }
browser-mockup::part(tabs) { }
browser-mockup::part(actions) { }
browser-mockup::part(action-minimize) { }
browser-mockup::part(action-maximize) { }
browser-mockup::part(action-close) { }
browser-mockup::part(navigation) { }
browser-mockup::part(history) { }
browser-mockup::part(button-back) { }
browser-mockup::part(button-forward) { }
browser-mockup::part(button-refresh) { }
browser-mockup::part(url) { }
browser-mockup::part(path) { }
browser-mockup::part(body) { }
```

## License
This library is in the public domain. You do not need permission, nor do you need to provide attribution, in order to use, modify, reproduce, publish, or sell it or any works using it or derived from it.
