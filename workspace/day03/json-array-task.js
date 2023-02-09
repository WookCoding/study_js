// 상품명, 가격, 재고를 프로퍼티로 담고 있는 object를 3개 선언한다.
// 3개의 Object를 1개의 array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
let file = require('fs');

function product(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
}

let products = new Array();
products.push(new product("사과",1000, 20));
products.push(new product("바나나",1500, 50));
products.push(new product("포도",2000, 30));

products = JSON.stringify(products);

// file.writeFile('shop.json', products, 'utf-8', error => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log('성공');
//     }
// });

file.readFile('shop.json', 'utf-8', (error, content) => {
    products = JSON.parse(content);
    let totalPrice = products.map(data => data.price).reduce((total, price) => total += price);
    let totalCount = products.map(data => data.count).reduce((total, count) => total += count);
    let result = {총가격: totalPrice , 총재고수: totalCount};

    // file.writeFile('sum.json', JSON.stringify(result), 'utf-8', error => {});
});

file.readFile('sum.json', 'utf-8', (error, content) => {
    console.log(JSON.parse(content));
});

// function f(products,callback){
//     products = JSON.parse(products);
//     let totals = new Array();
    
//     if(callback){
//         totals = products.map(data => data.price * data.count);
//         callback(total);
//         return;
//     }
//     return totals;
// }

// f(products, totals => totals.forEach(total => {console.log(total);}));
// 각 상품별 총 가격을 구한뒤 출력한다
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
