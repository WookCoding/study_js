// 최소 8 자, 최소 하나의 문자 및 하나의 숫자 정규식
const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


console.log("최소 8자 미충족 :" + reg.test("a1234"));
console.log("최소 하나의 문자 사용 x : " +  reg.test("1234151515"));
console.log("모든 조건 충족 : " +  reg.test("1234abagv1231"));