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
    constructor();
    connectedCallback(): void;
    static observedAttributes: string[];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string): void;
    addRandomTabs(count: number, isCollapsed?: boolean): void;
    extractRandomIndex(target: string[]): [string[], string];
    extractRandomCharacter(target: string): [string, string];
}

export { type BrowserMockupAttributes, BrowserMockupComponent, COMPONENT_TAG_NAME };
