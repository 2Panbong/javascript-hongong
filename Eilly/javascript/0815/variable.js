 // 1. Use strict
 // added in ES 5
 // use this for valina Javascript
 'use strcit';

 // 2 Variable
 // let (added in ES6) -> ES6에서 추가됨
 let globalName= 'global name';
{
 let name = 'ellie';
 console.log(name);
 name = 'hello';
 console.log(name);
}

console.log(globalName);


// var는 안 쓰는게 좋다(don't ever use this!)
// var hoisting( 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 말함)
// var는 블록 스코프가 없다
console.log(age); // 변수는 정의 되어져 있지만 값이 없다고 나옴 undefined
age =4;
console.log(age); 
var age;


let name;

// 3. Constants - 한번 할당하면 값이 절대 바뀌지 않음
const dayInweek = 7; // Immutable Data Type
const maxNumber =5;
// 값이 변경 될수 있는 것을 "Mutable Data Type" 이라고함 바이러스가 이런것

// 4 . Variable types
// 어떤 데이터든 primitive(숫자 문자열,불린,null,undefined,symbol), object(box container)  타입두가지로 나뉘어진다.
// function도 data type중에 하나이다. first-class function이 지원된다는 건 function에 인자로도 전달되고 함수로 할수 있는것을 말함

// 자바스크립트에서는 다른 언어와 다르게 숫자는 number type 하나 뿐이다! 심지어 number라고 선언 안해도 됨!

const count = 17;
const size = 17.1
console.log(`value: ${count}, types: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0; //infinity
const negativeInfinity = -1/0; // -Infinity
const nAn = 'not a number'/2; // NaN 숫자가 아닌 값!
console.log(infinity)
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53) ~2*53
// 숫자에 n을 붙이면 bigInt로 간주되어짐
console.log(`value: ${bigInt}, type" ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan; // +를 이용해서 문자열을 붙일 수 있음
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; // template literals (string);
console. log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ""
// true: any other value
const canRead =true;
const test = 3 <1 // false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
let x ;
console.log(`value:${x}, type: ${typeof x}`)

// symbol, create unique identifiers for objects
// 정말 고유한 식별자가 필요할때 사용함

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 주어지는 스트링에 상관없이 고유한 식별자를 만들때 사용함
console.log(symbol1===symbol2);

// 스트링에 똑같을때 동일한 심볼을 만들고 싶다면 Symbol.for을 쓰면됨
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2);
// 그냥 심볼을 출력할려하면 에러가 발생함
// console.log(`value:${gSymbol1}, type: ${typeof gSymbol1}`);
// .description을 써서 스트링으로 변환해서 출력을 해야한다.
console.log(`value:${gSymbol1.description}, type: ${typeof gSymbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
// const 키워드기 때문에 포인터가 잠겨있어서 할당이 불가함
// 하지만 ellie. ??? 하면 변경가능
ellie.age = 21;

// 5. dynamic typing: dynamically typed language
// 선언할때 어떤  타입인지 선언하지 않고 런타입, 프로그램이 동작할때 할당된 값에 따라 타입이 변경 할 수 있습니다!
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);// text의 타입은 string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);// number로 변경이 되었음
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`); // 문자열 75가 됨
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`); //number가 됨
console.log(text.charAt(0)); // 에러발생 중간에 숫자로 바꾸었기 때문에
// 그래서 타입스크립트가 나왔음...

// 이해가 잘 안되는 부분은 console.log를 이용해서 확인하면서 공부를 하자!


