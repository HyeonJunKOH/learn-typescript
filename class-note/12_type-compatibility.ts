// 인터페이스
interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
}

var developer:Developer;
var person: Person;

// 함수
var add = function(a:number){
    // ...
}
var sum = function(a:number, b:number){
    // ...
}
sum = add;
//  add= sum;

// 제네릭
interface Empty<T>{
    // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;


