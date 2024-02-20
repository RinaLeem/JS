//Лабораторная работа 2
//Объявите функцию, которая принимает на вход функциональное
//выражение и набор параметров для его вызова, а возвращает результат
//вызова переданного функционального выражения.

function IsPerfect(x) {
    let sum = 0;

    for (let i = 1 ; i < x; i++){
        if ( x % i === 0){
            sum += i;
        }
    }
    return sum === x; 
}

function Lab2(func, x){
    if (typeof func === 'function'){
        return func(x);
    }
    else{
        return -1;
    }
}


let x = prompt('Input X: ');
x = Number(x);

let result = Lab2(IsPerfect,x);
console.log(result);

let result2 = Lab2(x,x);
console.log(result);



