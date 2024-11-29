import { BrowserMockupHistory } from './browser-mockup-history';
import style from './browser-mockup.css?raw';
import html from './browser-mockup.html?raw';

export type BrowserMockupAttributes =
{
    tabs?: number,
    collapsedTabs?:number,
    url?:string,
}

const ICONS = `♔♕♖♗♘♙♚♛♜♝♞♟♠♣♥♦♡♢♤♧`;
const LABELS = 
[
    'Tabbr',
    'Browsr',
    'Demor',
    'Mockr',
    'Presentr',
    'Showcasr',
    'Samplr',
    'Playr',
    'Chessr',
    'Suitr',
];
const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(style);

export const COMPONENT_TAG_NAME = 'browser-mockup';
export class BrowserMockupComponent extends HTMLElement
{
    icons: string = structuredClone(ICONS);
    labels: string[] = structuredClone(LABELS);

    history: BrowserMockupHistory;

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.innerHTML = html;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        this.history = new BrowserMockupHistory(this);
        
        const backButton = this.shadowRoot!.querySelector('[part="button-back"]')!;
        backButton.addEventListener('click', () =>
        {
            this.history.back();
        });
        const forwardButton = this.shadowRoot!.querySelector('[part="button-forward"]')!;
        forwardButton.addEventListener('click', () =>
        {
            this.history.forward();
        });
    }

    #managedTabs: WeakSet<HTMLElement> = new WeakSet();
    connectedCallback()
    {
        this.shadowRoot!.querySelector('slot[name="tab"]')?.addEventListener('slotchange', (event: Event) =>
        {
            const children = (event.target as HTMLSlotElement).assignedElements() as HTMLElement[];
            for(let i = 0; i < children.length; i++)
            {
                if(this.#managedTabs.has(children[i])) { continue; }
                const tab = children[i];
                const iconAttribute = tab.dataset.icon;
                const labelAttribute = tab.dataset.label;
                let iconElement = tab.querySelector('.icon');
                let labelElement = tab.querySelector('.label');
                if(iconElement == null)
                {
                    if(this.icons.length == 0) { this.icons = structuredClone(ICONS); }
                    let icon = iconAttribute;
                    if(icon == null)
                    {
                        [this.icons, icon] =  this.extractRandomCharacter(this.icons);
                    }
                    iconElement = document.createElement('span');
                    iconElement.classList.add('icon');
                    iconElement.textContent = icon;
                    tab.append(iconElement);
                }
                
                if(labelElement == null && labelAttribute != null)
                {
                    labelElement = document.createElement('span');
                    labelElement.classList.add('label');
                    labelElement.textContent = labelAttribute;
                    tab.append(labelElement);
                }

                tab.dataset.type = (labelElement == null) ? 'collapsed-tab' : 'tab';
            }

            const selected = this.querySelector('.selected') ?? this.querySelector('[slot="tab"]');
            selected?.classList.add('selected');
        })
    }

    static observedAttributes = [ "url", "tabs", "collapsed-tabs" ];
    attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
    {
        if(attributeName == "url")
        {
            const path = this.shadowRoot!.querySelector('[part="path"]');
            if(path != null)
            {
                path.textContent = newValue;
            }
        }
        else if(attributeName == "tabs")
        {
            const count = parseInt(newValue);
            if(isNaN(count))
            {
                console.error(new Error("Could not parse tabs attribute value into integer."));
            }
            this.addRandomTabs(count);
        }
        else if(attributeName == "collapsed-tabs")
        {
            const count = parseInt(newValue);
            if(isNaN(count))
            {
                console.error(new Error("Could not parse collapsed-tabs attribute value into integer."));
            }
            this.addRandomTabs(count, true);
        }
    }

    addRandomTabs(count: number, isCollapsed: boolean = false)
    {
        const tabType = (isCollapsed) ? 'collapsed-tab' : 'tab';
        const tabs = [...this.querySelectorAll(`[data-type="${tabType}"]`)] as HTMLElement[];
        for(let i = 0; i < tabs.length; i++)
        {
            tabs[i].remove();
        }

        // random items are extracted from cloned
        // values so they will not repeat until all
        // of the items have been used

        const newTabs: HTMLElement[] = [];
        for(let i = 0; i < count; i++)
        {
            const tab = document.createElement('span');
            tab.setAttribute('slot', 'tab');
            tab.dataset.type = tabType;
            
            const icon = document.createElement('span');
            icon.classList.add('icon');
            let iconString = '';
            if(this.icons.length == 0) { this.icons = structuredClone(ICONS); }
            [this.icons, iconString] = this.extractRandomCharacter(this.icons);
            icon.textContent = iconString;
            tab.append(icon);

            if(isCollapsed == false)
            {
                const label = document.createElement('span');
                label.classList.add('label');
                let labelString = '';
                if(this.labels.length == 0) { this.labels = structuredClone(LABELS); }
                [this.labels, labelString] = this.extractRandomIndex(this.labels);
                label.textContent = labelString;
                tab.append(label);
            }            

            newTabs.push(tab);
        }
        this.append(...newTabs);

        const selected = this.querySelector('.selected') ?? this.querySelector('[slot="tab"]');
        selected?.classList.add('selected');
    }

    extractRandomIndex(target: string[])
    {
        const itemIndex = Math.floor(Math.random()*target.length);
        const item = target.splice(itemIndex, 1);
        return [target, item[0]] as [string[], string];
    }
    extractRandomCharacter(target: string)
    {
        const itemIndex = Math.floor(Math.random()*target.length);
        const item = target.charAt(itemIndex);
        target = target.replace(item, '');
        return [target, item] as [string, string];
    }
}
if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, BrowserMockupComponent);
}