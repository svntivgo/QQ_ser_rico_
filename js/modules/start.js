import { eraser } from "../models/eraser.js";
/**
 * Starts the game
 * @param {function} nextStep just the next after player press CONTINUAR first time
 */
export function start (nextStep) {
    eraser()
    nextStep()
}
