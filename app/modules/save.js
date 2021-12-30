export function save(data) {
    let savedData = localStorage.getItem('QQ_ser_rico') ? JSON.parse(localStorage.getItem(`QQ_ser_rico`)) : [];

    if (savedData.find(user => user.id != data.id)) {
        savedData.push(data);
    }

    // console.log(data.find(user => user.username === "Jose"));
    // localStorage.setItem('QQ_ser_rico', JSON.stringify(
    //     [
    //         {
    //             id: "1111",
    //             username: "Juan"
    //         },
    //         {
    //             id: "2222",
    //             username: "Jose"
    //         }
    //     ]
    // ))

}
