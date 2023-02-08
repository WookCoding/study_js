// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.

// 동물원의 동물 전체 평균 나이를 구한다.

function animal(name, species, age){
    this.name = name;
    this.species = species;
    this.age = age;
}

let animals = new Array();
animals.push(new animal("호돌이","호랑이",14));
animals.push(new animal("몽키맨","원숭이",11));
animals.push(new animal("꼬끼오","딝",10));

let animalsJSON = JSON.stringify(animals);

// function avgAge(animalsJSON, callback){
//     animals = JSON.parse(animalsJSON);
//     let age = new Array();

//     age = animals.map(data => data.age);

//     if(callback){
//         callback(age);
//         return;
//     }
//     return age;
// }

// avgAge(animalsJSON, result =>{
//     let totalAge = 0;
//     totalAge = result.reduce((totalage, age) => totalage += age);
//     console.log(parseInt(totalAge / result.length));
// });

function avgAge(animalsJSON, callback){
    animals = JSON.parse(animalsJSON);
    let totalAge;
    totalAge = animals.map(data => data.age).reduce((age, data) => age += data);
    
    if(callback){
        callback(totalAge, animals.length);
        return;
    }
    return totalAge;
}

avgAge(animalsJSON, (totalAge, count) => console.log(parseInt(totalAge / count)));

console.log(avgAge(animalsJSON));
