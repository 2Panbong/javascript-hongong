// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1+2}');
// 백틱은 여러줄로 나뉘어도 적용이 됨 특수문자 ...도 적용이 되는걸 볼 수 있다.

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(1%1); // remainder
console.log(1**1); // exponentiation

// 3 Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter :${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter :${counter}`);
const preDecremnt= --counter;
console.log(`preIncrement: ${preIncrement}, counter :${counter}`);
const postDecrement = counter--;
console.log(`preIncrement: ${preIncrement}, counter :${counter}`);

// 4. Assignment operators
let x =3;
let y =6;
x+=y; // x = x+y;
x-=y;
x*=y;
x/=y;

// 5 Comparison operators
console.log(10<6); // less than
console.log(10<=6); // less than or equal
console.log(10>6); // greater than
console.log(10>=6); // greater than or equal

// 6 . Logical operators: || (or), && (and), ! (not)
const value1 =false;
const value2 = 4<2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 여기서 중요한건 익스프레션이나 함수들을 제일 뒤에다가 배치하는것이 효율적인 코드작성이다.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// and 연산도 헤비한 연산일수록 제일 뒤에다가 체크하는 것이 좋습니다.

//often used to compress long if-statement
// nullableObject && nullableObject.somthing
// if (nullableObject != null) {
//   nullableObject.something;
// }


function check() {
  for(let i = 0; i <10; i++){
    //wasting time
    console.log('😱');
  }
  return true;
}

// !(not)
console.log(!value1);

// 6 Equality
const stringFive = '5';
const numberFive = 5;

// ==loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive== numberFive);
console.log(stringFive !== numberFive);

// obejct equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler 
console.log(0==false); // true
console.log(0===false); // false
console.log(''==false); // true
console.log(''===false); // false
console.log(null==undefined); // true
console.log(null===undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if(name ==='ellie') {
  console.log('Welcome, Ellie!');
} else if (name ==='codre'){
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator:?
// condition ? value1 : value2;
console.log(name === 'ellie'?'yes':'no');
// 간단할때만 써라
// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser='IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'FireFox':
    console.log('love you!');
    break;    
  default:
      console.log('same all!')
    break;
}

// 11 loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while ( i>0) {
  console.log(`while:${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i>0);

// for loop, for(begin: condition; step)
for(i=3; i>0; i--) {
  console.log(`for:${i}`);
}

for (let i =3; i > 0 ; i = i-2){
// inline variable declaration
console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i =0; i<10; i++) {
  for(let j = 0; j <10; j++) {
    console.log(`i:${i},j:${j}`);
  }
}
// 이 방법은 CPU에 좋지가 않다. 되도록이면 피하는게 좋음

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// 0부터 10까지 짝수만 나오게끔 continue를 이용해서 만들어라
// (use continue)

for(let i = 0; i<=10; i++) {
  if(i%2!==0) continue;
  console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until
// 0부터 10까지를 나오는걸 작성하되 숫자 8을 만나면 그만하는것을 작성
// reaching 8 (use break)

for(let i =0; i<=10; i++) {
  if(i>8)break;
  console.log(i)
}