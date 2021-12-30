import {
    info
} from "../modules/info.js";

export function forfeit() {
    let user = []

    let arrayUsers = JSON.parse(localStorage.getItem('QQ_ser_rico'))
    arrayUsers.forEach(element => {
        user.push(element)
    });

    user[user.length - 1].achievement = "Retirado"
    localStorage.setItem('QQ_ser_rico', JSON.stringify(user))

    let sorry = `${user[user.length - 1].username}, te has retirado con un premio acumulado de $${user[user.length - 1].prize}`

    let msj = `¡Gracias por participar!`

    info(sorry, msj)
    document.getElementById('main__forfeit').style.display = 'none'
    document.getElementById('main__button-1').addEventListener('click', () => {
        window.location.reload();
    })
}
