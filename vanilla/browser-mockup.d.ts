/**
 * A mock history object to use in place of the browser's `window.history` api.
 * Allows the mockup to navigate forward and backward through
 * every url that it has been assigned.
 */
declare class BrowserMockupHistory {
    mockup: BrowserMockupComponent;
    items: string[];
    index: number;
    constructor(mockup: BrowserMockupComponent);
    /**
     * Adds a new url to the histoy.
     * @description calling `add(value)` serves the same function as calling `window.history.pushState(null, '', value);`;
     * @param value the new url to store in the history
     */
    add(value: string): void;
    /**
     * Replaces the last url in the history with a new url.
     * @description calling `replace(value)` serves the same function as calling `window.history.replaceState(null, '', value);`;
     * @param value the new url to store in the history
     */
    replace(value: string): void;
    /**
     * Navigate to the previously set url by setting the mockup's url, and dispatching a 'popstate' event.
     */
    back(): void;
    /**
     * Navigate to the next url in the mockup's history, if any,
     * by setting the mockup's url, and dispatching a 'popstate' event.
     */
    forward(): void;
}

type BrowserMockupAttributes = {
    tabs?: number;
    collapsedTabs?: number;
    url?: string;
};
declare const COMPONENT_TAG_NAME = "browser-mockup";
declare class BrowserMockupComponent extends HTMLElement {
    #private;
    icons: string;
    labels: string[];
    history: BrowserMockupHistory;
    constructor();
    connectedCallback(): void;
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
    addRandomTabs(count: number, isCollapsed?: boolean): void;
    extractRandomIndex(target: string[]): [string[], string];
    extractRandomCharacter(target: string): [string, string];
}

export { type BrowserMockupAttributes, BrowserMockupComponent, COMPONENT_TAG_NAME };
