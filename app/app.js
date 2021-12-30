import {
    save
} from "./modules/save.js";
import {
    User
} from "./models/user.js";
import {
    getData
} from "./modules/getData.js";
import {
    getAchievement
} from "./modules/achievement.js";
import {
    questionnaire
} from "./src/questionnaire.js";

window.onload = () => {
    let userData = [];
    let achievement = "";
    let prize = 0;
    let userId = document.getElementById('main__id');
    let username = document.getElementById('main__username');
    let startButton = document.getElementById('main__button');
    let forfeitButton = document.getElementById('main__forfeit');

    function test() {
        let button = document.getElementById('main__id')
        button.addEventListener('click', () => {
            console.log(achievement[1].level);
        })
    }

    test()

    getAchievement(achievement, forfeitButton);

    getData(userData, startButton, userId, username);

}
