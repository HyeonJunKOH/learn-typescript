interface Person {
    name: string
    age: number
}

type Human= {
    name: string;
    age: number
}

var seho:Human ={
    name:"세호",
    age:10
}

var suho:Person={
    name: "수호",
    age:20
}

// 중요한 점은!! type과 interface의 가장 큰 차이점은 확장 여부이다
// type은 확장 즉 extends가 불가능하다.

type MyString = string;
var str: MyString = "hello";

type Todo = {id:number, title: string, done:boolean};
function getTodo(todo:Todo){
    
}