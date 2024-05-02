// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType> (text:T) :T {
    text.length;
    return text;
}
// logTextLength(10);
// logTextLength({leng:10});

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoopingItemOption <T extends keyof ShoppingItem>(itemOption: T) : T {
    return itemOption;
}
getShoopingItemOption('name');