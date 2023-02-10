// let checkString = /[^0-9.]/g;
// const hangle = "공일이삼사오육칠팔구".split("");
// const checkButton = document.querySelector(".check-button");
// const result = document.querySelector("div.result");
// const number = document.querySelector("div.number-box");
// let count = 1;
// let resultMsg ="결과표시 부분";
// number.innerHTML = count;
// result.innerHTML = resultMsg;
// function confirm(){
//     const input = document.getElementById("check").value;
//         if(input.includes(".")){
//             resultMsg ="";
//             for (let i = 0; i < input.length; i++) {
//                 if(input.charAt(i) != "."){
//                     resultMsg += hangle[input.charAt(i)];
//                 }else{
//                     resultMsg +="점";
//                 }
//             }
//             count = 2;
//             result.innerHTML = resultMsg;
//             number.innerHTML = count;
//         }else if(checkString.test(input)){
//             count = 4;
//             resultMsg ="숫자만 입력해주세요.";
//             result.innerHTML = resultMsg;
//             number.innerHTML = count;
//         }else if(input == ""){
//             count = 1;
//             resultMsg ="결과표시 부분";
//             result.innerHTML = resultMsg;
//             number.innerHTML = count;
//         }else{
//             resultMsg = input.split("").map(input => hangle[input]).join("");
//             count = 3;
//             result.innerHTML = resultMsg;
//             number.innerHTML = count;
//         }
// }

document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});

function changeToHangle(number) {
    const numbering = document.querySelector("div#round");
    const resultTag = document.querySelector("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "", temp = "", check = false;;

    if(isNaN(number) || number.charAt(0) == '.'){
        resultTag.innerHTML = "숫자만 입력해주세요.";
        numbering.innerHTML = "4";
        return;
    }

    if(number < 1) {
        result = "영";
    }

    for(let i in number) {
        temp = hangle[number.charAt(i)];

        if(i == 0 && result == "영"){
            continue;
        }

        if(!temp) {
            check = true;
            result += "점";
            continue;
        }

        result += temp;

        numbering.innerHTML = "3";
        
        if(check){
            numbering.innerHTML = "2";
        }
    }
    resultTag.innerHTML = result;
}

function getResult(callback){
    const input = document.querySelector("input[name='input']").value;
    if(callback){
        callback(input);
    }
}