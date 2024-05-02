interface Developer {
    name: string;
    skill: string;
}
interface Person{
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return {name:'seho', age: 30, skill: 'react'}
}

var tony = introduce();

// 타입 가드 정의 
function isDeveloper(target: Developer | Person): target is Developer {
    return(target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
    console.log(tony.skill);
    
}else{
    console.log(tony.age);
    
}