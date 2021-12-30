/**
 * Changes the color of the selected answer by player
 * CASE/PROBLEM
 */
export function answerSelection() {

    for (let i = 0; i <= 4; i++) {
        let answersButton = document.getElementById(`answer${i}`)

        if (answersButton !== null) {
            document.addEventListener('click', (e) => {
                switch (answersButton.checked) {
                    case true:
                        document.getElementById(i - 1).classList.add('selected');
                        break;
                    case false:
                        document.getElementById(i - 1).classList.remove('selected')
                        break;
                    default:
                        break;
                }
            })
        }
    }
}
