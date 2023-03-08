/* art + shift + a */
/* 
자료형
-기본
    - string
    - numer
    - boolean
    - null
    - undefined
    
-객체
    - 오브젝트
    - 기본형
    */

// 1.string
let myName = "길동";
let email = "gildong@naver.com";
let city = "'서울'";

console.log(myName);
console.log(email);
console.log(city);

console.log("내 이름은 ", myName, "이고 ", "이메일은", email, " 입니다.");
console.log("내 이름은 " + myName + "이고" + "이메일은" + email + " 입니다.");

//텔플릿 리터럴
console.log(`내 이름은 ${myName}이고, 이메일은 ${email}입니다.`);
let gildong = `내 이름은 ${myName}이고, 이메일은 ${email}입니다.`;
console.log(gildong);

// 2.number
let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);

//NAN: Not a number
console.log("apple" - 3);

// 3.boolean
let checked = true;
let unchecked = false;

console.log(unchecked);

// 4.undefined
let undef;
console.log(undef);

// 5.null
let empty = null;
console.log(empty);

// 6.Array[ 배열 ]
let fruits1 = ["Orange", "Pineapple", "Apple", "Banana"];
let fruits2 = new Array("Orange", "Pineapple", "Apple", "Banana");

console.log(fruits1[0], fruits1[1], fruits1[2]);

let data = [1, "chanhoon", false, null, undefined];
console.log(data[4]);

// array : 2차원 배열

let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];

console.log(korean[0][0]); //가
console.log(korean[1][1]); //마

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

icecream =
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2];
console.log(icecream);

// 3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10.11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object 오브젝트?

let cat = {
  name: "나비",
  age: 1,
  isCat: true, //소문자여야함.
  mew: function () {
    return "냐옹";
  },
};

// 점 표기법
// 오브젝트이름.key이름

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew()); //호출: ()

//대괄호 표기법
//오브젝트이름['key이름']
console.log(cat["name"]);

let changhoon = {
  name: "윤창훈",
  age: 31,
  major: "Mechanical Engineering",
  isMan: true,
  isWoman: false,
  Future: "빛이 남",
};

// typleof: 자료형을 알려주는ㄴ
console.log(typeof null);
console.log(typeof "문자");
console.log(typeof []);
console.log(typeof NaN);
console.log(typeof null);

let und;
console.log(typeof und);

// console.log('"',${typeof 1},'"','isn',"'",'t', $(typeof 'string'),
// 'data type');

let isnt = "isn't";
console.log(isnt);

console.log(`"${typeof 1}" isn't "${typeof "1"}" data type.`);

// 형 변환
// let mathScore = prompt("수학 점수를 입력하세요."); //80
// let engScore = prompt("영어 점수를 입력하세요."); //90

//8090
// let avg = (mathScore + engScore) / 2;

// console.log(avg);

// 1. -> 문자 String()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof str1);
console.log(typeof str1.toString());

// 2. ? -> 숫자 Number()
let n1 = true;
let n2 = false;
let n3 = "123.9";

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

console.log(typeof Number(n1)); //1: ture
console.log(typeof Number(n2)); //0: false
console.log(typeof Number(n3));

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3)); //소수점을 버리고 정수형으로 변환

// 실습: 명시적 형변화 뜻 : 사용자가 직접 형변환을 시켜주는 것.
let mathScore = "77";
let engScore = "88";

let avgScore;

avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log("점수:", avgScore);
console.log("정수형 점수:", parseInt(avgScore));
avgScore = parseInt(avgScore);
console.log("정수형 점수:", parseFloat(avgScore));

function circumference(r) {
  return parseFloat(r);
}

console.log(circumference(4.567));
console.log(circumference("4.567absssd"));
console.log(circumference("4.567r가나"));
console.log(circumference("가나4.567"));
