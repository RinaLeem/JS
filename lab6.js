//Лабораторная работа 6


// 1. Реализуйте функцию для поиска в двух заданных массивах элементов,
// которые присутствуют в обоих массивах. Используйте Set.

function find_common(arr1,arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const res = new Set();
    for (const i of set1) if (set2.has(i)) res.add(i);
    return res;
}

arr1 = [1,2,3,4,1,1,2,2];
arr2 = [1,2,5,6];
console.log(find_common(arr1,arr2));

// 2. Реализуйте функцию, которая подсчитывает количество вхождений
// каждого элемента в массиве. Используйте Map.

function count_entry(arr){
    const map = new Map();
    for (const item of arr) map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    return map;
    } 

 console.log(count_entry(arr1));


// 3. В массиве студентов подсчитать число обучающихся в самой большой
// группе. Номер группы – свойство класса Student типа string.

class Student{
    constructor(name, group){
        this.name = name;
        this.group = group;
    }
}

function the_biggest_group(students){
    group_counts = {};
    for (const item of students){
        const group = item.group;
        group in group_counts ? group_counts[group]++ : group_counts[group] = 1;
    }
    const values = Object.values(group_counts);
    const max_count = Math.max(...values);
    // console.log(group_counts);
    return max_count;
}

const students = [
    st1 = new Student('Ivan','6101'),
    st2 = new Student('Petr','6101'),
    st3 = new Student('Kate','6102'),
    st4 = new Student('Viktoria','6102'),
    st5 = new Student('Anna','6102'),
    st6 = new Student('Bob','6103'),
];

console.log(the_biggest_group(students));
