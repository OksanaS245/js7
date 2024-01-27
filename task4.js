//task 4
class Goods {
    constructor(listOfGoods = {}) { //конструктор класса Goods принимает в качестве аргумента пустой объект
    this.goods = listOfGoods; //свойство goods равно аргументу listOfGoods
    }
    calculatePrice() {
        let totalSum = 0;
        for (let name in this.goods) { //создаем перменную-ключ в свойстве goods, которое принимает значение listOfGoods
            const good = this.goods[name]; //создаем переменную good и присваиваем ей значение товара (объекта с ценой и количеством) для текущего ключа name.
            totalSum += good.price * good.quantity;
        }
        return totalSum;
    }
};

const list = {
    //ключ  [     значение             ]
    Laptop: { price: 1200, quantity: 5 },
    Smartphone: { price: 500, quantity: 10 },
    Headphones: { price: 50, quantity: 20 }
}
const someGood = new Goods(list);
console.log('Total price is ' + someGood.calculatePrice());

