// browser-mockup.css?raw
var browser_mockup_default = `:host\r
{\r
    --border-radius: 5px;\r
    --margin: 1em;\r
    --shadow-color: rgb(0 0 0);\r
    --box-shadow: 0 0 15px -3px var(--shadow-color);\r
\r
    --background: canvas;\r
    --border-color: canvastext;\r
    --header-background: #2b2b2b;\r
    --header-font-color: #868686;\r
    --url-color: #313131;\r
    --tab-background: #181818;\r
    --tab-selected-background: #1f1f1f;\r
    --tab-highlight: #0078d4;\r
    --tab-selected-font-color: #d7d7d7;\r
\r
    display: grid;\r
    grid-template-rows: auto 1fr;\r
    background: var(--background);\r
    border: solid 2px var(--border-color);\r
    border-radius: var(--border-radius);\r
    overflow: hidden;\r
    isolation: isolate;\r
    margin: var(--margin);\r
    box-shadow: var(--box-shadow);\r
}\r
\r
[part="header"]\r
{\r
    display: grid;\r
    grid-template-columns: auto 1fr auto;\r
    grid-template-rows: auto auto;\r
    background: var(--header-background);\r
    color: var(--header-font-color);\r
}\r
\r
[part="header"]::before\r
{\r
    content: '\u2630';\r
    display: inline-flex;\r
    align-items: center;\r
    justify-content: center;\r
    padding: 0 7px;\r
}\r
\r
[part="tabs"]\r
{\r
    padding-top: 7px;\r
    gap: 1px;\r
    display: flex;\r
    overflow-x: auto;\r
}\r
\r
[part="tabs"] :not(slot)\r
,[part="tabs"] ::slotted(*)\r
{\r
    font-size: 12px;\r
    font-family: sans-serif;\r
    background: var(--tab-background);\r
    padding: 5px 1.2em;\r
    user-select: none;\r
    display: flex;\r
    align-items: center;\r
    gap: 7px;\r
    flex-wrap: nowrap;\r
    white-space: nowrap;\r
}\r
[part="tabs"] > .selected\r
,[part="tabs"] > ::slotted(.selected)\r
{\r
    border-top: solid 1px var(--tab-highlight);\r
    background: var(--tab-selected-background);\r
    color: var(--tab-selected-font-color);\r
}\r
[part="tabs"] [data-type="tab"]\r
,[part="tabs"] ::slotted([data-type="tab"])\r
{\r
    order: 1;\r
}\r
[part="tabs"] [data-type="collapsed-tab"]\r
,[part="tabs"] ::slotted([data-type="collapsed-tab"])\r
{\r
    order: 2;\r
}\r
\r
[part="navigation"]\r
{\r
    grid-column: span 3;\r
    display: flex;\r
    background: var(--tab-selected-background);\r
}\r
\r
[part="history"]\r
{\r
    display: flex;\r
    align-items: center;\r
    padding: 3px 5px;\r
    gap: 7px;\r
}\r
[part="history"] span\r
{\r
    border-radius: 50%;\r
    width: 16px;\r
    height: 16px;\r
    padding: 5px;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    line-height: 5px;\r
    user-select: none;\r
}\r
[part="history"] span:hover\r
{\r
    background-color: rgb(0 0 0 / .5);\r
}\r
[part="history"] [part="button-back"]\r
{\r
    transform: scaleX(-1);\r
}\r
[part="history"] [part="button-refresh"]\r
{\r
    rotate: 100deg;\r
}\r
\r
[part="url"]\r
{\r
    flex: 1;\r
    display: flex;\r
    overflow: hidden;\r
    padding: 3px;\r
}\r
\r
[part="path"]\r
{\r
    flex: 1;\r
    font-family: sans-serif;\r
    font-size: 12px;\r
    padding: 7px 15px;\r
    background-color: var(--url-color);\r
    border-radius: 30px;\r
    box-shadow: inset 0 0 2px 1px rgba(0 0 0 / .6);\r
    white-space: nowrap;\r
    text-overflow: ellipsis;\r
    overflow: hidden;\r
}\r
\r
[part="body"]\r
{\r
    all: initial;\r
\r
    /* overflow set to mimic browser default overflow */\r
    overflow: auto;\r
    /* bg color set to canvas to mimic window bg color */\r
    background-color: canvas;\r
    /* color set to canvastext to mimic window color */\r
    color: canvastext;\r
    /* allow for color schemes */\r
    color-scheme: light dark;\r
    /* margin set to 8px to mimic default body property */\r
    margin: 8px;\r
}\r
\r
[part="actions"]\r
{\r
    display: none;\r
}\r
\r
@media (prefers-color-scheme: dark)\r
{\r
    :host\r
    {\r
        --shadow-color: rgb(59, 59, 62);\r
        --border-color: var(--shadow-color);\r
    }\r
    \r
}\r
\r
:host(.windows) [part="actions"]\r
{\r
    display: flex;\r
}\r
\r
:host(.windows) [part="actions"] span\r
{\r
    padding: 0 7px;\r
    font-size: 12px;\r
    line-height: 10px;\r
    display: flex;\r
    align-items: center;\r
}\r
\r
:host(.windows) [part="action-minimize"]::before\r
{\r
    content: '\u{1F5D5}';\r
}\r
:host(.windows) [part="action-maximize"]::before\r
{\r
    content: '\u{1F5D6}';\r
}\r
:host(.windows) [part="action-close"]::before\r
{\r
    content: '\u{1F5D9}';\r
}\r
\r
:host(.macos) [part="header"]::before\r
{\r
    grid-column: 3;\r
    grid-row: 1;\r
}\r
\r
:host(.macos) [part="actions"]\r
{\r
    display: flex;\r
    align-items: center;\r
    gap: 7px;\r
    padding: 0 7px;\r
    grid-column: 1;\r
    grid-row: 1;\r
}\r
:host(.macos) [part="actions"] span\r
{\r
    display: block;\r
    width: 7px;\r
    height: 7px;\r
    border-radius: 50%;\r
}\r
:host(.macos) [part="action-minimize"]\r
{\r
    background-color: #00CA4E;\r
}\r
:host(.macos) [part="action-maximize"]\r
{\r
    background-color: #FFBD44;\r
}\r
:host(.macos) [part="action-close"]\r
{\r
    background-color: #FF605C;\r
}`;

// browser-mockup.html?raw
var browser_mockup_default2 = '<header part="header">\r\n    <span part="tabs">\r\n        <slot name="tab"></slot>\r\n    </span>       \r\n    <span part="actions">\r\n        <span part="action-minimize"></span>\r\n        <span part="action-maximize"></span>\r\n        <span part="action-close"></span>\r\n    </span>\r\n    <div part="navigation">\r\n        <span part="history">\r\n            <span part="button-back">\u279C</span>\r\n            <span part="button-forward">\u279C</span>\r\n            <span part="button-refresh">\u21BB</span>\r\n        </span>\r\n        <span part="url">\r\n            <span part="path">https://www.mywebsite.com</span>\r\n        </span>\r\n    </div>\r\n</header>\r\n<div part="body">\r\n    <slot></slot>\r\n</div>';

// browser-mockup.ts
var ICONS = `\u2654\u2655\u2656\u2657\u2658\u2659\u265A\u265B\u265C\u265D\u265E\u265F\u2660\u2663\u2665\u2666\u2661\u2662\u2664\u2667`;
var LABELS = [
  "Tabbr",
  "Browsr",
  "Demor",
  "Mockr",
  "Presentr",
  "Showcasr",
  "Samplr",
  "Playr",
  "Chessr",
  "Suitr"
];
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(browser_mockup_default);
var COMPONENT_TAG_NAME = "browser-mockup";
var BrowserMockupComponent = class extends HTMLElement {
  icons = structuredClone(ICONS);
  labels = structuredClone(LABELS);
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = browser_mockup_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
  }
  #managedTabs = /* @__PURE__ */ new WeakSet();
  connectedCallback() {
    this.shadowRoot.querySelector('slot[name="tab"]')?.addEventListener("slotchange", (event) => {
      const children = event.target.assignedElements();
      for (let i = 0; i < children.length; i++) {
        if (this.#managedTabs.has(children[i])) {
          continue;
        }
        const tab = children[i];
        const iconAttribute = tab.dataset.icon;
        const labelAttribute = tab.dataset.label;
        let iconElement = tab.querySelector(".icon");
        let labelElement = tab.querySelector(".label");
        if (iconElement == null) {
          if (this.icons.length == 0) {
            this.icons = structuredClone(ICONS);
          }
          let icon = iconAttribute;
          if (icon == null) {
            [this.icons, icon] = this.extractRandomCharacter(this.icons);
          }
          iconElement = document.createElement("span");
          iconElement.classList.add("icon");
          iconElement.textContent = icon;
          tab.append(iconElement);
        }
        if (labelElement == null && labelAttribute != null) {
          labelElement = document.createElement("span");
          labelElement.classList.add("label");
          labelElement.textContent = labelAttribute;
          tab.append(labelElement);
        }
        tab.dataset.type = labelElement == null ? "collapsed-tab" : "tab";
      }
      const selected = this.querySelector(".selected") ?? this.querySelector('[slot="tab"]');
      selected?.classList.add("selected");
    });
  }
  static observedAttributes = ["url", "tabs", "collapsed-tabs"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "url") {
      const path = this.shadowRoot.querySelector('[part="path"]');
      if (path != null) {
        path.textContent = newValue;
      }
    } else if (attributeName == "tabs") {
      const count = parseInt(newValue);
      if (isNaN(count)) {
        console.error(new Error("Could not parse tabs attribute value into integer."));
      }
      this.addRandomTabs(count);
    } else if (attributeName == "collapsed-tabs") {
      const count = parseInt(newValue);
      if (isNaN(count)) {
        console.error(new Error("Could not parse collapsed-tabs attribute value into integer."));
      }
      this.addRandomTabs(count, true);
    }
  }
  addRandomTabs(count, isCollapsed = false) {
    const tabType = isCollapsed ? "collapsed-tab" : "tab";
    const tabs = [...this.querySelectorAll(`[data-type="${tabType}"]`)];
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].remove();
    }
    const newTabs = [];
    for (let i = 0; i < count; i++) {
      const tab = document.createElement("span");
      tab.setAttribute("slot", "tab");
      tab.dataset.type = tabType;
      const icon = document.createElement("span");
      icon.classList.add("icon");
      let iconString = "";
      if (this.icons.length == 0) {
        this.icons = structuredClone(ICONS);
      }
      [this.icons, iconString] = this.extractRandomCharacter(this.icons);
      icon.textContent = iconString;
      tab.append(icon);
      if (isCollapsed == false) {
        const label = document.createElement("span");
        label.classList.add("label");
        let labelString = "";
        if (this.labels.length == 0) {
          this.labels = structuredClone(LABELS);
        }
        [this.labels, labelString] = this.extractRandomIndex(this.labels);
        label.textContent = labelString;
        tab.append(label);
      }
      newTabs.push(tab);
    }
    this.append(...newTabs);
    const selected = this.querySelector(".selected") ?? this.querySelector('[slot="tab"]');
    selected?.classList.add("selected");
  }
  extractRandomIndex(target) {
    const itemIndex = Math.floor(Math.random() * target.length);
    const item = target.splice(itemIndex, 1);
    return [target, item[0]];
  }
  extractRandomCharacter(target) {
    const itemIndex = Math.floor(Math.random() * target.length);
    const item = target.charAt(itemIndex);
    target = target.replace(item, "");
    return [target, item];
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, BrowserMockupComponent);
}
export {
  BrowserMockupComponent,
  COMPONENT_TAG_NAME
};
