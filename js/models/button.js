export function mainButton(text) {
        let main = document.getElementById('main__bottom')
        let mainButton = document.createElement('button')
        mainButton.type = 'submit'
        mainButton.id = `main__button-1`
        mainButton.innerHTML = text
        main.appendChild(mainButton)
}
