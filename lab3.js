//Лабораторная работа 3

//1. Создайте объект в формате JSON, который содержит информацию о
//свойствах студента фамилия, имя, массив оценок marks. Каждая
//оценка – это объект с двумя свойствами subject и mark.
//Напишите функцию, которая выводит эту информацию в консоль.

const student1 = {
    name: "Ekaterina",
    surname: "Balashova",
    marks: [ 
        {subject: "Math", mark: 5},
        {subject: "OOP", mark: 5},
        {subject: "DB", mark: 5}
    ]
};

function PrintStudent(student){
    console.log("Surname:", student.surname);
    console.log("Name:", student.name);
    console.log("Marks:");

    for (let i = 0; i < student.marks.length; i++) {
        const mark = student.marks[i];
        console.log(mark.subject + " - " + mark.mark);
    }
}

PrintStudent(student1);
console.log('');


//2. Создайте классы Student и Mark, которые описывают объекты из
//предыдущего примера.

class Mark{
    constructor(subject,mark){
        this.subject = subject;
        this.mark = mark;
    }
}

class Student{
    constructor(name,surname,marks){
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

    //3. Добавьте в класс Student метод, возвращающий среднюю оценку
    //студента по всем предметам.
    averageMark(){
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++){
            sum += this.marks[i].mark;
        }
        return sum / this.marks.length;
    }

    //4. Добавьте в класс метод, возвращающий все оценки по переданному
    //предмету.
    allMarks(name){
        let arr = []
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            if (mark.subject === name)
            arr.push(this.marks[i].mark)
        }
        return arr;
    }

    //5. Добавьте в класс метод добавления оценки по предмету.
    addMark(subject, mark){
        const newMark = new Mark (subject, mark);
        this.marks.push(newMark);
    }

    //6. Добавьте в класс метод, удаляющий все оценки по переданному
    //предмету.
    deleteMark(name){
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].subject === name)
            delete this.marks[i];
            //this.marks[i].mark = NaN;
        }
        this.marks = this.marks.filter(Boolean);

        // this.marks = this.marks.filter( mark => {
        //     return mark.name != name;
        // })  ;
    }
}

// Пример использования классов
const marks = [
    new Mark("Math", 5),
    new Mark("Math", 5),
    new Mark("Math", 4),
    new Mark("OOP", 3),
    new Mark("DB", 4),
    new Mark("DB", 4)
  ];
  
  const student = new Student("Ivanov", "Ivan", marks);
  student.printInfo();
  console.log('Average: ' + student.averageMark());
  console.log('Math: ' + student.allMarks("Math"));
  console.log('Add new mark OOP-5');
  student.addMark("OOP", 5);
  console.log('OOP: ' + student.allMarks("OOP"));
  student.deleteMark("Math");
  student.printInfo();
  console.log('');

