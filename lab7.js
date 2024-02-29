//Лабораторная работа 7


class Mark{
    constructor(subject,mark){
        this.subject = subject;
        this.mark = mark;
    }
}

class Student{
    constructor(surname,name,marks){
        this.name = name;
        this.surname = surname;
        this.marks = marks;
    }

    printInfo(){
        console.log("Surname:", this.surname);
        console.log("Name:", this.name);
        console.log("Marks:");
    
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            console.log(mark.subject + " - " + mark.mark);
        }
    }

    //Метод, возвращающий среднюю оценку студента по всем предметам.
    averageMark(){
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++){
            sum += this.marks[i].mark;
        }
        return sum / this.marks.length;
    }
}

// 1.Напишите функцию, производящую сортировку в массиве студентов
// по средней оценке. Метод должен реализовывать сортировку Шелла.

function shellSort(array){
    // Инициализация начального значения шага - четное число
    let step = 1;
    while (step < array.length / 2) step = step * 2; 

    for (step; step > 0; step = Math.floor(step / 2)) //Постепенное уменьшение шага
    {
        for (let i = step; i < array.length; i++){
            let j = i;
            let temp = array[i];
            // Пока не достигнуто начало массива и предыдущий элемент больше текущего
            while(j >= step && array[j - step].averageMark() > temp.averageMark()){
                array[j] = array[j - step]; // Перемещаем элемент на правильное место
                j -= step
            }
            array[j] = temp;
        }
    }
    return array;
}

const students = [
    new Student("Ivanov", "Ivan", [
        new Mark("Algebra", 3),
        new Mark("History", 3),
        new Mark("Physics", 3),
        new Mark("OOP", 3),
        new Mark("DB", 3)
      ]),
      new Student("Petrov", "Petr", [
        new Mark("Algebra", 4),
        new Mark("History", 4),
        new Mark("Physics", 4),
        new Mark("OOP", 4),
        new Mark("DB", 4)
      ]),
      new Student("Annushkina", "Ann", [
        new Mark("Algebra", 5),
        new Mark("History", 5),
        new Mark("Physics", 5),
        new Mark("OOP", 5),
        new Mark("DB", 5)
      ]),
      new Student("Matveev", "Matvey", [
        new Mark("Algebra", 2),
        new Mark("History", 2),
        new Mark("Physics", 2),
        new Mark("OOP", 2),
        new Mark("DB", 2)
      ]),

];
console.log(students);

const sorted = students.slice();
console.log(shellSort(sorted));


// 2.Напишите функцию, производящую бинарный поиск студентов в
// массиве по фамилии и имени. Сортировку массива произвести при
// помощи метода sort().


const sorted_array = students
  .slice()
  .sort((student1, student2) => student1.name.localeCompare(student2.name)); 
  console.log(sorted_array);

function binarySearch(array, element, low = 0, high = array.length - 1) {
    const middle = Math.floor((low + high) / 2);

    if (array[middle].name === element) {
        return array[middle].printInfo();
    }

    if (low >= high) {
        return -1;
    }

    if (element.localeCompare(array[middle].name)) {
        return binarySearch(array, element, low, middle - 1);
    } else {
        return binarySearch(array, element, middle + 1, high);
    }
}

console.log(binarySearch(sorted_array, 'Ivan'));