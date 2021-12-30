import { eraser } from "../models/eraser.js";

export function start (nextStep) {
    eraser()
    nextStep()
}
