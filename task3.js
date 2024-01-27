//task 3
class Artist {
    //name;
    //gender;
    //age;               получается, что объявление полей без заданных параметров не обязательно?
    //hight;
    //movies;
    //awards;
    constructor(name, gender, age, hight, movies, awards) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.hight = hight;
        this.movies = movies;
        this.awards = awards;
    }
    printInfo() {
        console.log('Name - ' + this.name);
        console.log('Gender - ' + this.gender);
        console.log('Age - ' + this.age + ' y.o.');
        console.log('Hight - ' + this.hight + ' m');
        console.log('Movies - ' + this.movies);
        console.log('Awards - ' + this.awards);
    }
};

const leo = new Artist('Leonardo Wilhelm DiCaprio', 'male', 49, 1.83, ['Titanic', 'The Wolf of Wall Street', 'The Great Gatsby'], ['"Oscar"', 'BAFTA', 'Screen Actors Guild Award', '"Golden Globe"', '"Silver Bear"']);
leo.printInfo();

