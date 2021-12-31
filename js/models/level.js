import { answerSelection } from "../modules/selected.js";
import { questionnaire } from "../src/questionnaire.js";

export let answer = []

/**
 * Prints on screen the question, answers and information like prize and level
 * @param {number} number Number of the level to show on screen
 * @param {function} validator Validates if answer is true or not
 */
export function level(number, validator) {
    let i = Math.floor(Math.random() * 5) + 0
    let main = document.getElementById('main');
    let question = questionnaire[number]
    let questionLevel = question.level;
    let questionPrize = question.prize;
    let questionCategory = question.category;
    let questionRandom = question.questions[i]
    let questionText = questionRandom.text;
    let questionOptions = questionRandom.options
    let questionAnswer1 = questionRandom.options[0].text;
    let questionAnswer2 = questionRandom.options[1].text;
    let questionAnswer3 = questionRandom.options[2].text;
    let questionAnswer4 = questionRandom.options[3].text;

        let user = []

        let arrayUsers = JSON.parse(localStorage.getItem('QQ_ser_rico'))
        arrayUsers.forEach(element => {
            user.push(element)
        });

    main.innerHTML = (`
        <div class = "main__info-contianer" id = "main__info-container">
            <p> Esta pregunta es del nivel: ${questionLevel}, y su premio es de: $${questionPrize} </p>
            <p> Total acumulado: $${user[user.length - 1].prize} </p>
        </div>

        <p class = "main__question" id = "main__question" > ${questionCategory} </p>

        <p class = "main__question" id = "main__question" > ${questionText} </p>

        <div class = "main__answers" id = "main__answers" >

            <input type="radio" id="answer1" name="fav_language"><label class = "main__answer 1" id = "0" for="answer1">
                ${questionAnswer1}
            </label>

            <input type="radio" id="answer2" name="fav_language"><label class = "main__answer 2" id = "1" for="answer2">
                ${questionAnswer2}
            </label>

            <input type="radio" id="answer3" name="fav_language"><label class = "main__answer 3" id = "2" for="answer3">
                ${questionAnswer3}
            </label>

            <input type="radio" id="answer4" name="fav_language"><label class = "main__answer 4" id = "3" for="answer4">
                ${questionAnswer4}
            </label>

        </div>
    `);
    document.getElementById('main__forfeit').style.display = 'block'
    validator(questionOptions)
    answerSelection(number)

    JSON.stringify(localStorage.setItem('answer', ""))
}

