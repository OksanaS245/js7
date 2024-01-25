//task 7
const date = new Date();

function addZero(num){
    if (num > 0 && num < 10) { 
        return '0' + num;
    } else {
        return num;
    }
};
let formattedDate = addZero(date.getDate()) + "." + addZero(date.getMonth() + 1) + "." + addZero(date.getFullYear());

class Stock {
    constructor() {
        this.goods = {};
    }

    addGood(name, quantity, price, purchaseDate) {
        if (!this.goods.hasOwnProperty(name)) {
            this.goods[name] = {
                quantity: 0,
                price: 0,
                purchaseDate: []
            };
        }
        this.goods[name].quantity += quantity;
        this.goods[name].price += quantity * price;
        this.goods[name].purchaseDate.push(purchaseDate);
    }

    deleteGood(name, quantity, price) {
        if (this.goods.hasOwnProperty(name)) {
            if (this.goods[name].quantity === quantity || (this.goods[name].quantity === 0 && this.goods[name].quantity < quantity)) {
                delete this.goods[name];
            } else {
                this.goods[name].quantity -= quantity;
                this.goods[name].price -= quantity * price;
            }
        } else {
            throw new Error('Not in stock');
        }
    }
    getPrice() 
    {let totalPrice = 0;
    for (const item in this.goods) {
        totalPrice += this.goods[item].price;
    }
    return totalPrice;}
}

const vegetable = new Stock();
vegetable.addGood('cucumber', 10, 150, formattedDate);
vegetable.addGood('tomato', 5, 100, formattedDate);
vegetable.deleteGood ('cucumber', 5, 150);
console.log(vegetable.goods);
console.log('Total price: ' + vegetable.getPrice())
