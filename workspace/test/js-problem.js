//배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 code를 입력하세요.

// var nums = new Array(5);

// nums = nums.fill(0).map((e,i) => (i+1)*100);
// console.log(nums);

// nums.pop();
// nums.pop();

// console.log(nums);

// ------------------------------------------------

// 배열의 내장함수
// <pass> 부분에 배열 내장함수를 이용하여 코드를 입력하고
// 다음과 같이 출력되게 하세요.

// 데이터
// var arr = [200, 100, 300];
//pass
// console.log(arr);

// 출력
// [200, 100, 10000, 300]

// arr.splice(2,0, 10000);
// console.log(arr);

// ------------------------------------------------
// concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오

// 데이터
// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = // 빈칸을 채워주세요

// 출력
// 2019/04/26 11:34:27

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

// ----------------------------------------------------------------