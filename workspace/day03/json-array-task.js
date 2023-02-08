// 상품명, 가격, 재고를 프로퍼티로 담고 있는 object를 3개 선언한다.
// 3개의 Object를 1개의 array 객체에 모두 담는다.
// JSON으로 변경시킨다.
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

function f(products,callback){
    products = JSON.parse(products);
    let totals = new Array();
    
    if(callback){
        totals = products.map(data => data.price * data.count);
        callback(total);
        return;
    }
    return totals;
}

f(products, totals => totals.forEach(total => {console.log(total);}));


// 각 상품별 총 가격을 구한뒤 출력한다
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
