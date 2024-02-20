//Лабораторная работа 5

// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму элементов, расположенных после
// последнего элемента равного нулю.


function SumAfterZero(arr){
    let sum = 0;
    let after_zero = false;

    for (const item of arr){
        if (after_zero == true) sum += item;
        if (item == 0) after_zero = true;        
    }
    return sum;
}

const array = [1,2,3,0,4,5];
console.log(SumAfterZero(array));


// Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую сумму элементов в тех
// строках, которые содержат хотя бы один отрицательный элемент.

function SumBelowZero(arr){
    let sum = 0;
    let flag_below_zero = false;

    for (const i of arr){
        row_sum = 0;
        for (const j of i){
            if (j < 0) flag_below_zero = true;        
            row_sum += j;
        }    
        if (flag_below_zero == true) sum += row_sum;
        flag_below_zero = false;   
    }
    return sum;
}

const matrix = [
    [ 1,  2, -10],
    [ 1, -2, -10],
    [-1,  2,   3],
    [99, -1,   1]
]
console.log(SumBelowZero(matrix));










// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму элементов массива, расположенных до
// минимального элемента.
function var_1(arr){
    let min = Infinity;
    sum = 0;

    for (const item of arr){
        if (item < min) min = item;
    }
    for (const item of arr){
        if (item == min) break;
        sum += item;
    }
    return sum;
}
console.log(var_1(array));

// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую произведение элементов, расположенных
// между максимальным и минимальным элементами.

function var_4(arr){
    let min = Infinity;
    let max = -min;
    sum = 1;

    for (const item of arr){
        if (item < min) min = item;
        if (item > max) max = item;
    }
    flag = false
    for (const item of arr){
        if (item == max) break;
        if (flag == true) sum *= item;
        if (item == min) flag = true;
    }
    return sum;
}
console.log(var_4(array));

// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую количество элементов, равных предыдущему
// элементу.

function var_5(arr){
    sum = -1;
    pred = arr[0];

    for (const item of arr){
        if (item == pred) sum += 1;
        pred = item;
    }
    return sum;
}
arr = [0,0,1,1,1,1,2,3]
console.log(var_5(arr));


// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую среднее арифметическое нечётных
// элементов.

function var_6(arr){
    sum = 0;
    iter = 0;
    for (let i = 1; i < arr.length; i += 2) {
        sum += arr[i];
        iter ++ ;
    }
    return sum/iter;
}
console.log(var_6(arr));



// Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую номера строк и столбцов
// всех седловых точек матрицы.
function var_11(matr){

    let num = [];
    let mins = [];
    let maxes = matr[0];

    ind_max = 0;
    
    for (let i = 0; i < matr.length; i++){
        let min = Infinity;
        ind_min = 0;

        for (let j = 0; j < matr[i].length; j++){
            if ( matr[i][j] < min) {
                min = matr[i][j];
                ind_min = j;
                }
            if ( matr[i][j] > maxes[j]) {
                maxes[j] = matr[i][j];
                }
            } 
            mins.push(min);
        }
    
    
    console.log(mins);
    console.log(maxes);

    for (let i = 0; i < mins.length; i++) {
        for (let j = 0; j < matr[i].length; j++) {
            if (matr[i][j] === mins[i] && matr[i][j] === maxes[j]) {
                num.push([i, j]);
            }
        }
    }

    return num;
}

console.log(var_11(matrix));