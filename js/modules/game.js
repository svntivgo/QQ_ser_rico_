import {
    info
} from "./info.js";
import {
    level
} from "../models/level.js";
import {
    rules,
    msj
} from "../src/texts.js";
import {
    results
} from "../controllers/results.js";
import {
    questionnaire
} from "../src/questionnaire.js";
import {
    lose
} from "../controllers/lose.js";
import {
    mainButton
} from "../models/button.js";
import {
    win
} from "../controllers/win.js";

export function game() {

    let user = []

    let arrayUsers = JSON.parse(localStorage.getItem('QQ_ser_rico'))
    arrayUsers.forEach(element => {
        user.push(element)
    });

    let rules = `Bienvenido ${user[user.length - 1].username}, la dinámica consta de cinco niveles, cada nivel contiene una pregunta y cuatro posibles respuestas, de las cuales, solo una es correcta. Si responde correctamente la pregunta, se le otorgará un premio, podrá retirarse en cualquier momento y mantener sus premios, pero, si responde incorrectamente la pregunta, perderá el acumulado de sus premios.

    Instrucciones: Leer la pregunta, posteriormente seleccionar la respuesta que creas correcta, por último, hacer click en el botón "Enviar respuesta".`

    let msj = `¡Buena suerte!`

    info(rules, msj)

    mainButton("CONTINUAR")

    let startButton = document.getElementById('main__button-1');
    let counter = 0

    /**
     * When user clicks CONTINUAR on second screen, prints question and answers
     * Execute Win screen, Lose screen, Forfeit screen, case/problem
     * Prints prize ammount on screen
     */
    startButton.addEventListener('click', () => {

        if (counter > 0 && counter <= 4 && JSON.parse(localStorage.getItem('answer')) == true) {
            user[user.length - 1].prize += questionnaire[counter - 1].prize /**SUM of user prize + level prize */
            localStorage.setItem('QQ_ser_rico', JSON.stringify(user))
            level(counter, results)
            for (let i = 0; i < 4; i++) {
                document.getElementById(i).classList.remove('selected')
            }
            counter++
            return
        } else if (counter < 1) {
            level(counter, results)
            counter++
            return
        } else if (counter > 0 && counter <= 4 && JSON.parse(localStorage.getItem('answer')) === false) {
            lose(startButton)
        } else if (counter === 5) {
            startButton.innerHTML = 'INICIO'
            win()
            counter++
            return
        }
    })

}
