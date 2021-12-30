import {
    start
} from "./modules/start.js";
import {
    game
} from "./modules/game.js";
import {
    getData
} from "./controllers/getData.js";
import {
    forfeit
} from "./controllers/forfeit.js";
import {
    history
} from "./modules/history.js";

window.onload = () => {
    let userData = localStorage.getItem('QQ_ser_rico') ? JSON.parse(localStorage.getItem('QQ_ser_rico')) : [];
    let achievement = "";
    let prize = 0;
    let userId = document.getElementById('main__id');
    let username = document.getElementById('main__username');
    let startButton = document.getElementById('main__button-0');
    let instructionsButton = ""
    let forfeitButton = document.getElementById('main__forfeit');
    let historyButton = document.getElementById('main__history')

    forfeitButton.addEventListener('click', () => {
        forfeit()
    })

    historyButton.addEventListener('click', () => {
        history()
    })

    /**
     * Allows validation of local data
     * Starts the game when the user press CONTINUAR
     */
    startButton.addEventListener('click', () => {
        if (userData.length === 0 && userId.value != "" && userId.value != "") {
            getData(userData, userId, username);
            start(game)
            console.log(userData);
            startButton.removeEventListener
        } else if (userId.value === "" && userId.value === "") {
            alert("Ingrese por favor un número de cédula y un nombre")
        } else {
            for (let i = 0; i < userData.length; i++) {

                if (userData[i].id === userId.value) {
                    alert("Este usuario ya participó")

                } else if (userId.value != "" && userId.value != "") {

                    getData(userData, userId, username);
                    start(game)
                    startButton.removeEventListener

                }
                break
            }
        }

    })

}
