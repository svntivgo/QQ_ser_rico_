export function getData(array, button, element1, element2) {
    button.addEventListener('click', () => {
        let value1 = element1.value;
        let value2 = element2.value;

        array.push({
            id: value1,
            name: value2
        });
    })
}
