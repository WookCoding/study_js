// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1 ~ 10까지 Array객체에 담은 후 짝수만 출력
// let numbers = new Array(10).fill(0);
// for (let i = 0; i < 10; i++) {
//     numbers[i] = i + 1;
// }


// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i]);
//     }
// }

// function numbers(callback){
//     let numbers = new Array(10).fill(0);
//     for (let i = 0; i < 10; i++) {
//         numbers[i] = i + 1;
//     }
    
//     if(callback){
//         callback(numbers);
//     }
//     return numbers;
// }

// numbers(function(result){
//     for (let i = 0; i < result.length; i++) {
//         if(result[i] % 2 == 0){
//             console.log(result[i]);
//         }
//     }   
// });

// numbers.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구";
// let number = "공사일사";
// let result = "";

//     for (let i = 0; i < number.length; i++) {
//             for (let j = 0; j < hangle.length; j++) {
//             if(hangle.charAt(j) == number.charAt(i)){
//                 result += hangle.indexOf(number.charAt(i));
//             }
//         }
//     }

// function hangleToNumber(callback){
//     for (let i = 0; i < number.length; i++) {
//             for (let j = 0; j < hangle.length; j++) {
//             if(hangle.charAt(j) == number.charAt(i)){
//                 result += hangle.indexOf(number.charAt(i));
//             }
//         }
//     }
//     if(callback){
        // callback(result);
        // return;
//     }
//     return result;
// }

// hangleToNumber(function(result){
//     console.log(result);
// });

// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "일공이사".split("");

// let result = input.map(input => hangle.indexOf(input)).join("");

// console.log(parseInt(result));


// 정수를 한글로 변경
// let hangle = "공일이삼사오육칠팔구";
// let number = "4256";
// let result = "";

// for (let i = 0; i < number.length; i++) {
//     result += hangle.charAt(Number(number.charAt(i)));
// }
// console.log(result);

let hangle = "공일이삼사오육칠팔구".split("");
let input = "1024".split("");

let result = input.map(input => hangle[input]).join("");
console.log(result);

// while(input != 0){
//     result += hangle[input % 10] + result;
//     input = parsInt(input / 10);
// }


// 1~100까지 합 출력
// let numbers = new Array(100).fill(0);
// let result = 0;

    // for (let i = 0; i < numbers.length; i++) {
    //     numbers[i] = i + 1;
    // }

    // for (let i = 0; i < numbers.length; i++) {
    //     result += numbers[i];
    // }
    // console.log(result);


// function numberSum(callback){
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = i + 1;
//     }    

//     if(callback){
//         callback(numbers);
//         return;
//     }
//     return result;
// }

// numberSum(function(result){
//     let sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i];
//     }
//     console.log(sum);
// });


// for (let i = 0; i < 100; i++) {
//     result += i + 1;
// }
// console.log(result);

var sum = 0;
// let result = Array(100).fill().map((data, i) =>  data = i + 1).forEach(function(result){
//     sum += result;
// });

let result = Array(100).fill().map((data, i) =>  data = i + 1).forEach(data => sum += data);
console.log(sum);

