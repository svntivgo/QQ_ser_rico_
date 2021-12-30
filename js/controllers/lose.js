import {
    info
} from "../modules/info.js";

export function lose(button) {
    let user = []

    let arrayUsers = JSON.parse(localStorage.getItem('QQ_ser_rico'))
    arrayUsers.forEach(element => {
        user.push(element)
    });

    let rules = `${user[user.length - 1].username}, has respondido incorrectamente la pregunta, y has perdido un premio acumulado de $${user[user.length - 1].prize}`

    let msj = `¡Gracias por participar!`

    user[user.length - 1].achievement = "Derrotado"
    user[user.length - 1].prize = 0
    localStorage.setItem('QQ_ser_rico', JSON.stringify(user))

    info(rules, msj)
    document.getElementById('main__forfeit').style.display = 'none'
    document.getElementById('main__button-1').addEventListener('click', () => {
        window.location.reload();
    })
}
