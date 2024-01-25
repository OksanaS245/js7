//task 6
const date = new Date();

function addZero(num){
    if (num > 0 && num < 10) { 
        return '0' + num;
    } else {
        return num;
    }
};

console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear());

//getMonth начинается с 0