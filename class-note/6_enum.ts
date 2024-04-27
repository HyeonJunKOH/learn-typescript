enum Shoes{
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0 특정 값을 할당 하지 않으면 기본 초기값은 0이다.

enum Game{
    Maple = "메이플",
    LostArk = "로스트아크"
}
var MyGame = Game.LostArk;
var MyGame = Game.Maple;
// 문자형 이넘은 위와 같은 형태를 갖는다.

// 이넘활용사례
enum Answer{
    Yes = "Y",
    No = "N"
}
function askQuestion(answer:Answer){
    if(answer === Answer.Yes){
        console.log("정답입니다.");
    }
    if(answer === Answer.No){
        console.log("오답입니다."); 
    }
}

askQuestion(Answer.Yes);
