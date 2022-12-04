import { LitElement, html, css } from 'lit';
import { UserPlayerView } from '../views/UserPlayerView.js';
import { Message } from '../views/Message.js';
import { MachinePlayerView } from '../views/MachinePlayerView.js';

export class C4Turn extends LitElement {
    #message;

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
          game: { type: Object },
          activePlayerColor: { type: String},
        };
    }

    constructor() {
        super();
        this.#message = new Message('');
    }  

    render() {
        return html`
            ${this.activePlayerColor
                ? html`Turno de: ${this.activePlayerColor}`
                : ''
            }
        `;
    }

    
    dropToken() {
        let activePlayer = this.game.getActivePlayer();
        this.activePlayerColor = activePlayer.getColor();
        activePlayer.accept(this);
        //this.game.next();
    }

    visitUserPlayer(userPlayer) {
        this.#message.setMessage(this.game.getActivePlayer().getColor().toString() + ' player: ').write();
        Message.ENTER_COLUMN_TO_DROP.append();
        this.dispatchEvent(new CustomEvent('catch-column'));
    }

    visitMachinePlayer(machinePlayer) {
        setTimeout( () => {
            console.log('esrot wen visit machine ' , machinePlayer.getColumn());
            this.dispatchEvent(new CustomEvent('machine-player-column', {
                bubbles: true,
                composed: true,
                detail: { index: machinePlayer.getColumn() }
            }));
        }, 400)
    }

    // dropTokenOnColumn(column) {
    //     this.game.getActivePlayer().dropToken(column);
    // }

    resetTurn() {
        this.activePlayerColor = undefined;
    }
}
customElements.define('c4-turn', C4Turn);
