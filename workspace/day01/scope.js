// global.x = 20; // Node.js에서의 최상위 객체(전역 객체)
// window.x = 20; // 브라우저에서의 최상위 객체(전역 객체)
globalThis.x = 20; // global과 window객체를 상황에 맞게 상요해주는 전역 객체

function f() {
    // var x = 10;
    // console.log(x);
    // console.log(this.x);
    // console.log(global.x);
    console.log(globalThis.x);

    // for(var i =0; i<10; i++){
    for(let i =0; i<10; i++){

    }   
    console.log(i);
}

f();