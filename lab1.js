//Лабораторная работа 1
//Является ли число совершенным (равное сумме всех своих
//собственных делителей)

function IsPerfect(x) {
    let sum = 0;

    for (let i = 1 ; i < x; i++){
        if ( x % i === 0){
            sum += i;
        }
    }
    return sum === x; 
}

let x = prompt('Input X: ');
x = Number(x);
console.log(x);

console.log(IsPerfect(x) ? "YES" : "NO" ) ;

