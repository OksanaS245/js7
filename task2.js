//task 2
let rex = {
    animal: 'dog',
    makeSound: function(){
        console.log('Гав Гав');
    }
};

let charlie = {
    animal: 'dog',
    runFast : function() {
        console.log('Я умею быстро бегать');
    }
};

let martin = {
    animal: 'dog'
};

charlie.__proto__ = rex;
martin.__proto__ = charlie;

for (let key in charlie) {
    console.log(charlie[key]);
    }

    for (let key in martin) {
        console.log(martin[key]);
        }

