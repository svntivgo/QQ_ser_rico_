import { mainButton } from "../models/button.js";
import { eraser } from "../models/eraser.js";
import { userCard } from "../models/userCard.js";

export function history() {
    let user = []
    let arrayUsers = JSON.parse(localStorage.getItem('QQ_ser_rico'))

    switch (arrayUsers) {
        case null:
            alert('¡Ups!, ¡Aún no ha jugado alguien!')
            break;

        default:
            arrayUsers.forEach(element => {
                user.push(element)
            });

            eraser()

            let main = document.getElementById('main')
            let container = document.createElement('div')
            container.className = ('main__container')
            main.appendChild(container)

            mainButton('INICIO')
            document.getElementById('main__button-1').addEventListener('click', () => {
                window.location.reload();
            })


            user.forEach(element => {
                userCard(element.username, element.prize, element.achievement, container)
            });
            break;
    }
}
