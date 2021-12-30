export function userCard(name, prize, achievement, container) {
    let card = document.createElement('div')
    card.className = ('card')
    card.innerHTML = (`
            <div class = "username">
                ${name}
            </div>
            <div class = "achievement" >
                ${achievement}
            </div>
            <div class = "prize" >
                $${prize}
            </div>
    `)
    container.appendChild(card)
}
