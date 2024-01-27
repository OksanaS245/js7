//task 5
class Student {
    constructor(students = {}) {//конструктор принимает в качестве аргумента пустой объект
        this.students = students; //свойство students принимает значение пустого объекта
    }

    checkGPA() {
        for (let studentName in this.students) { //создаем ключ в объекте
            const student = this.students[studentName]; //создаем переменную, которая принимает значение ключа объекта
            let totalGrades = 0; // начальное значение оценок
            let totalSubjects = 0; //начальное значение количества предметов

            for (let subject in student) { // создаем ключ во вложенном объекте (конкретный студент)
                totalGrades += student[subject]; // оценки = значение ключа во вложенном объекте
                totalSubjects += 1;//увеличиваем на 1 количество предметов с каждой итерацией
            }

        
                const gpa = totalGrades / totalSubjects; //находим средний балл
                console.log(`${studentName}'s average GPA: ${gpa.toFixed(2)}`); //округляем значение ср.б. до двух цифр после запятой
            }
    }
}

const studentsData = {
    'Ivan': {
        math: 4,
        english: 5
    },
    'Alex': {
        math: 3,
        english: 4
    }
}

const studentInstance = new Student(studentsData);
studentInstance.checkGPA();
