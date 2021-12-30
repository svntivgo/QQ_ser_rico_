export function results(variables) {
    let itemId = ""

    document.addEventListener('click', (e) => {
        if (!isNaN(e.target.id)) {
            itemId = e.target.id
            switch (variables[itemId].value) {
                case true:
                    JSON.stringify(localStorage.setItem('answer', true));
                    break;

                case false:
                    JSON.stringify(localStorage.setItem('answer', false));
                    break;
                default:
                    break;
            }
        }
    })
}
