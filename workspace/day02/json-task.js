// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각 프로퍼티를 출력한 뒤; 다시 JSON으로 변환한다.

let productJSON = JSON.stringify({productName : "사과", price : 12000});

console.log(productJSON);
productJSON = JSON.parse(productJSON);

console.log(productJSON);
console.log(productJSON.productName);
console.log(productJSON.price);

productJSON = JSON.stringify(productJSON);
console.log(productJSON);

