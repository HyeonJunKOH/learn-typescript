type Heroes = 'Hulk'|'Capt'|'Thor'
type HeroAges = {[K in Heroes]: number}
const ages : HeroAges = {
    Hulk: 30,
    Capt: 100,
    Thor: 50
}

// for in 반복문 코드
var arr = ['a','b','c'];
for (var key in arr){
    console.log(arr[key]);
}