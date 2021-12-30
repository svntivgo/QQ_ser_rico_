import { User } from "../models/user.js";

export function getData(array, element1, element2) {
    let value1 = element1.value
    let value2 = element2.value
    let newUser = new User(value1, value2, 0, "")


    if (value1 != "" && value2 != "") {
        array.push(newUser);

        localStorage.setItem('QQ_ser_rico', JSON.stringify(array));
    }
}
