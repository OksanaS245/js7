//task 5
class Student {
    constructor() {
        this.gpa = {};
    }

    checkGPA(name, grades) {
        this.gpa[name] = {
            gpa: grades.reduce((sum, grade) => sum + grade, 0) / grades.length
        };
        return this.gpa[name].gpa;
    }
}

const ivan = new Student();
console.log(ivan.checkGPA('Ivan', [5, 3, 5, 4])); //Я не могу понять как вывести имя студента. Если указываю свойства и параметры класса, то выводит имя, но средний балл - NaN

