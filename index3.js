console.log("hello world!");

// 변수
var name = "홍길동";

console.log(name);

// 재선언
var name = "강한나";

console.log(name);

// let
// 재선언 불가, 재할당 가능
// 선언과 동시에 초기화 하지 않아도 됨.

let a = 1;
a = 2;
console.log(a);
let aa;
console.log(aa);

// const
// 1. 재선언 불가
// 2. 재할당 불가
// 3. 선언과 동시에 초기화 함.

const b = 3;
console.log(b);

//문제

let q1 = 2;

q1 = q1 - 2;
console.log(q1);
// 변화 하지 않는다.

const q2 = 5;
// q2 = q2 - 5; 불가능.

//식별자(변수, 함수) 이름 규칙
// 1. $ _
let $ = 5;
console.log($);

let _ = 5;
console.log(_);

//1. 숫자는 첫 자리에 선언하면 안됨.
// let 1st = 1;

//2. - 하이픈은 사용불가능함.
// let start-line = 5;

//3. 예약어 금지 (let, const, var, if, for, ....)
// let , const , 등등
