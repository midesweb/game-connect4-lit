import { LitElement, html, css } from 'lit';
import './interface/c4-button';

export class C4PlayerSelector extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                color: #fff;
                padding: 1rem;
            }
            h1 {
                font-weight: 300;
            }
            ul {
                margin: 0;
                padding: 0;
            }
            li {
                display: inline-block;
                padding: 0;
                margin: 0.5rem;
                list-style-type: none;
            }
            li:first-child {
                margin-left: 0;
            }
        `
    ];

    render() {
        return html`
            <h1>Selecciona el número de jugadores</h1>
            <ul>
                <li><c4-button @click=${this.onePlayer}>Un jugador</c4-button></li>
                <li><c4-button @click=${this.twoPlayers}>Dos Jugadores</c4-button></li>
                <li><c4-button @click=${this.demo}>Demo máquina</c4-button></li>
            </ul>
        `;
    }

    onePlayer() {
        this.dispatchPlayers(1);
    }
    twoPlayers() {
        this.dispatchPlayers(2);
    }
    demo() {
        this.dispatchPlayers(0);
    }

    dispatchPlayers(numPlayers) {
        this.dispatchEvent(new CustomEvent('players-selected', { 
            detail: { numPlayers }
        }));
    }
}
customElements.define('c4-player-selector', C4PlayerSelector);
