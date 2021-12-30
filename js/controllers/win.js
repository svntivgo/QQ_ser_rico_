import {
    info
} from "../modules/info.js";
import {
    questionnaire
} from "../src/questionnaire.js";

export function win() {
    let user = []

    let arrayUsers = JSON.parse(localStorage.getItem('QQ_ser_rico'))
    arrayUsers.forEach(element => {
        user.push(element)
    });

    user[user.length - 1].achievement = "Ganador"
    localStorage.setItem('QQ_ser_rico', JSON.stringify(user))

    let lastPrize = questionnaire[questionnaire.length - 1].prize + user[user.length - 1].prize

    let congrats = `¡Felicitaciones ${user[user.length - 1].username}!, has respondido correctamente todas las preguntas, tienes un premio acumulado de $${lastPrize}`

    let msj = `¡Gracias por participar!`

    info(congrats, msj)
    document.getElementById('main__forfeit').style.display = 'none'
    document.getElementById('main__button-1').addEventListener('click', () => {
        window.location.reload();
    })
}
