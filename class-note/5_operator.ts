// 유니온 타입
function logMessage(value:string | number){
    if(typeof value ==="number"){
        value.toLocaleString();
    }
    if(typeof value ==="string"){
        value.toString();
    }
    throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(10);

interface Person {
    name: string
    age: number
};

interface Developer{
    name: string
    skill: string
};

function askSomeone(someone: Developer | Person){
    someone.name;
    // someone.skill;
    // someone.age;
    // 유니온타입은 공통된 속성만을 받을 수 있다.
}
askSomeone({name: "현준", age: 32});
askSomeone({name:"현준", skill: "리액트"});
// 유니온 타입을 호출하려면 or 연산자기 때문에 각각의 해당 속성을 호출해야한다.

function whoSomeone(some: Developer & Person){
    some.name
    some.name
    some.skill
    // 인터섹션 타입은 &&연산자로 생각하면 된다.
}
whoSomeone({name:"현준", skill:"리액트", age:32});
// 인터섹션 타입은 &&연산자로 포함되어있는 해당 속성을 모두 호출해야한다.