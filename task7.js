//task 7

class Stock {
    constructor(goods = {}) {
        this.goods = goods;
    }

    addGood(name, quantity, price, purchaseDate) {
        const currentDate = new Date().toLocaleDateString();
        if (!this.goods[name]) {
                this.goods[name] = { //задаем изначальные свойства объекта
                quantity: 0,
                price: 0,
                purchaseDate: []
            };
        }
        
        this.goods[name].quantity += quantity;
        this.goods[name].price = price;
        this.goods[name].purchaseDate.push(currentDate);
    }

    deleteGood(name, quantity) {
        try {
            if (this.goods[name].quantity === quantity || (this.goods[name].quantity === 0 && this.goods[name].quantity < quantity)) {
                    delete this.goods[name];
                } else {
                    throw new Error('Not in stock');
                }
            
        } catch (error) {
            console.error(error.message);
        }
    }

    outInStock(name, quantity) {
        try {
            if (this.goods.hasOwnProperty(name)) { //проверка на наличие
                if (this.goods[name].quantity > 0 && this.goods[name].quantity >= quantity) {
                    this.goods[name].quantity -= quantity;
                } else {
                    throw new Error(`In stock only ${this.goods[name].quantity} ${name}s`);
                }
            } else {
                throw new Error('Item not found');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    getTotalCost() {
        let totalPrice = 0;
        for (const item in this.goods) {
            totalPrice += this.goods[item].price * this.goods[item].quantity;
        }
        return totalPrice;
    }
}

const vegetable = new Stock();
vegetable.addGood('cucumber', 10, 150);
vegetable.addGood('tomato', 5, 100);
vegetable.outInStock('cucumber', 15);
vegetable.outInStock('pepper', 7, 150);
console.log(vegetable.goods);
console.log('Total price: ' + vegetable.getTotalCost());