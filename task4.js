//task 4
class Goods {
    constructor() {
    this.goods = {};
    }
    calculatePrice(name, price, quantity) {
        this.goods[name] = {price, quantity}
        let totalSum = 0;
        for (let nameOfProduct in this.goods) {
            const good = this.goods[nameOfProduct];
            totalSum += good.price * good.quantity;
        }
        return totalSum;
    }
};

const someGood = new Goods();
console.log(someGood.calculatePrice('Fish', 5, 150));

