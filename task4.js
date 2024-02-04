//task 4
class Stock {
    constructor(listOfGoods = {}) { //конструктор класса Goods принимает в качестве аргумента пустой объект
    this.goods = listOfGoods; //свойство goods равно аргументу listOfGoods
    }
    calculateCost() {
        let totalSum = 0;
        for (let name in this.goods) { //создаем перменную-ключ в свойстве goods, которое принимает значение listOfGoods
            const good = this.goods[name]; //создаем переменную good и присваиваем ей значение товара (объекта с ценой и количеством) для текущего ключа name.
            totalSum += good.price * good.quantity;
        }
        return totalSum;
    }
};

const goodList = {
    //ключ  [     значение             ]
    Laptop: { price: 1200, quantity: 5 },
    Smartphone: { price: 500, quantity: 10 },
    Headphones: { price: 50, quantity: 20 }
}
const myStock = new Stock(goodList);
console.log('Total cost is ' + myStock.calculateCost());

