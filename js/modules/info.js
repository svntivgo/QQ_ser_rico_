export function info(textOne, textTwo) {
    let main = document.getElementById('main')

    main.innerHTML = (`
        <div class = "main__info-contianer" id = "main__info-container">
            <p> ${textOne} </p>
            <p> ${textTwo} </p>
        </div>

    `);
}
