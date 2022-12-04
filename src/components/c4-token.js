import { LitElement, html, css } from 'lit';

export class C4Token extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            span {
                display: inline-block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #303030;
            }
            .R {
                background-color: red;
            }
            .Y {
                background-color: yellow;
            }
        `
    ];

    static get properties() {
      return {
        color: { type: String },
        index: { type: String },
      };
    }

    render() {
        return html`
            <span class="${this.color}" @click=${this.dispatchSelected}>
            </span>
        `;
    }

    dispatchSelected() {
        this.dispatchEvent(new CustomEvent('token-selected', { 
            bubbles: true,
            composed: true,
            detail: {
                index: this.index,
            }
        }));
    }
}
customElements.define('c4-token', C4Token);
