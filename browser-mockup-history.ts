import { BrowserMockupComponent } from "./browser-mockup";

/**
 * A mock history object to use in place of the browser's `window.history` api.  
 * Allows the mockup to navigate forward and backward through
 * every url that it has been assigned.
 */
export class BrowserMockupHistory 
{
    mockup: BrowserMockupComponent;
    items: string[] = [];
    index: number = 0;

    constructor(mockup: BrowserMockupComponent)
    {
        this.mockup = mockup;
        const url = this.mockup.getAttribute('url') ?? "";
        if(url.trim() != "")
        {
            this.items.push(url);
        }
    }

    /**
     * Adds a new url to the histoy.
     * @description calling `add(value)` serves the same function as calling `window.history.pushState(null, '', value);`;
     * @param value the new url to store in the history
     */
    add(value: string) 
    {
        this.index++;
        this.items[this.index] = value;
        this.mockup.setAttribute('url', this.items[this.index]);
        for(let i = this.items.length-1; i > this.index; i--)
        {
            this.items.splice(i, 1);
        }
    }
    /**
     * Replaces the last url in the history with a new url.
     * @description calling `replace(value)` serves the same function as calling `window.history.replaceState(null, '', value);`;
     * @param value the new url to store in the history
     */
    replace(value: string) 
    {
        this.items[this.index] = value;
        this.mockup.setAttribute('url', this.items[this.index]);
    }
    /**
     * Navigate to the previously set url by setting the mockup's url, and dispatching a 'popstate' event.
     */
    back()
    {
        if(this.index == 0) { return; }
        this.index = Math.max(this.index - 1, 0);
        this.mockup.setAttribute('url', this.items[this.index]);
        this.mockup.dispatchEvent(new Event('popstate'));
    }
    /**
     * Navigate to the next url in the mockup's history, if any,
     * by setting the mockup's url, and dispatching a 'popstate' event.
     */
    forward() 
    {
        if(this.index == this.items.length-1) { return; }

        this.index = Math.min(this.index + 1, this.items.length-1);
        this.mockup.setAttribute('url', this.items[this.index]);
        this.mockup.dispatchEvent(new Event('popstate'));
    }
}