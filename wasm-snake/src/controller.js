import { Movement } from "../../pkg/app.js"

const MOVEMENT_KEYS = {
    [Movement.TOP]: [87, 38],
    [Movement.RIGHT]: [68, 39],
    [Movement.DOWN]: [83, 40],
    [Movement.LEFT]: [65, 37],
}

const STOP_KEY = 32;

export class Controller {
    constructor(on_stop = () => {}) {
        window.addEventListener('keydown', ({ which }) => {
            this.movement = Object.keys(MOVEMENT_KEYS).find(key => MOVEMENT_KEYS[key].includes(which))
        });

        window.addEventListener('keyup', ({ which }) => {
            this.movement == undefined;
            if(which == STOP_KEY) {
                on_stop();
            }
        })
    }
}
