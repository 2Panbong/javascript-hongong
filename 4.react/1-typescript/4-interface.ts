// interface : 객체 구조의 형식
// interface 타입명 {
//    속성명: 타입;
//    속성명: 타입;
//  }

interface User {
  firstname:string;
  lastname?: string;  // 속성명?, optional(필수값이 아닌) 속성
}

function printName(obj:User){
  console.log(obj.firstname + " " + obj.lastname);
}

// 타입명[]
// number[], stirng[], User[]
function printNames(arr:User[]) {
  for (let obj of arr) {
    console.log(obj.firstname+ " " + obj.lastname)
  }
}

const user: User = {
  firstname: "John",
  // lastname:"Smith",  
};

// 속성 추가 불가함
// user.phone = "01012341929";

const users: User[] = [
  {firstname:"John", lastname: "Smith"},
  {firstname:"Gildong", lastname :"Hong"}
]

printName(user);
printNames(users);
