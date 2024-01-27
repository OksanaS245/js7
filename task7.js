//task 7
const date = new Date();
const time = date.toLocaleDateString();
class Stock {
    constructor() {
        this.goods = {};
    }

    addGood(name, quantity, price, purchaseDate) {
        this.goods[name] = {
            quantity: 0,
            price: 0,
            purchaseDate: []
        };
        for (let name in this.goods) {
        this.goods[name].quantity += quantity;
        this.goods[name].price = price;
        this.goods[name].purchaseDate = [purchaseDate];}
    }

    deleteGood(name, quantity) {
        try {
            if (this.goods.hasOwnProperty(name)) {
                if (this.goods[name].quantity === quantity || (this.goods[name].quantity === 0 && this.goods[name].quantity < quantity)) {
                    delete this.goods[name];
                } else {
                    throw new Error('Not in stock');
                }
            } else {
                throw new Error('Item not found');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    outInStock(name, quantity) {
        try {
            if (this.goods.hasOwnProperty(name)) {
                if (this.goods[name].quantity > 0 && this.goods[name].quantity >= quantity) {
                    this.goods[name].quantity -= quantity;
                } else {
                    delete this.goods[name];
                }
            } else {
                throw new Error('Item not found');
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    
    getPrice() 
    {let totalPrice = 0;
    for (const item in this.goods) {
        totalPrice += this.goods[item].price * this.goods[item].quantity;
    }
    return totalPrice;}
}

const vegetable = new Stock();
vegetable.addGood('cucumber', 10, 150, time);
vegetable.addGood('tomato', 5, 100, time);
vegetable.outInStock('cucumber', 5, 150);
vegetable.outInStock('peper', 7, 150);
console.log(vegetable.goods);
console.log('Total price: ' + vegetable.getPrice())
