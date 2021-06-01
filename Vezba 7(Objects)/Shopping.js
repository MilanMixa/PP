'use strict';

(function(){
    var milk = new Product("moja kravica", 100, new Date(2022, 10, 23));
    var soda = new Product("CocaCola", 120.3456, new Date(2021, 8, 28));
    var chocolate = new Product("Milka", 92.435, new Date(2020, 3, 9));
    var card = new PayementCard(240, true, new Date(2023, 3, 16));
    var card1 = new PayementCard(123, true, new Date(2023, 3, 16));
    var card2 = new PayementCard(240, false, new Date(2023, 3, 16));
    var card3 = new PayementCard(240, true, new Date(2019, 3, 16));
    var bag = new ShoppingBag();
    bag.addProduct(milk);
    bag.addProduct(soda);
    bag.addProduct(chocolate);
    checkoutAndBuy(bag, card);
    checkoutAndBuy(bag, card1);
    checkoutAndBuy(bag, card2);
    checkoutAndBuy(bag, card3);
    console.log(card)
})();

function Product(name, price, expDate){
    this.id = Math.floor(Math.random() * (99999 - 10000) + 10000);
    this.name = name;
    this.price = price.toFixed(2);
    this.date = expDate;
    this.getInfo = function(){
        var info = this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase() + this.id +", " + this.name +", " + this.price;
        return info;
    }
};

function ShoppingBag(){
    this.listOfProducts = new Array;
    this.addProduct = function(prod){
        if(prod.date - new Date() > 0){
            this.listOfProducts.push(prod);
        }
    }
    this.calcAverage = function(){
        var sum = this.calculateTotalPrice();
        var average = sum / this.listOfProducts.length;
        return average.toFixed(3);
    }
    this.getMostExpensive = function(){
        var max = this.listOfProducts[0];
        for(var i = 1; i < this.listOfProducts.length; i++){
            if(max.price < this.listOfProducts[i].price){
                max = this.listOfProducts[i];
            }
        }
        console.log(max.getInfo());
    }
    this.calculateTotalPrice = function(){
        var sum = 0;
        this.listOfProducts.forEach(function(element){
            sum += parseFloat(element.price);
        });
        return sum;
    }
};

function PayementCard(balance, status, validUntil){
    this.balance = balance.toFixed(2);
    this.isActive = status;
    this.validUntil = validUntil;
};

function checkoutAndBuy(shoppingBag, payementCard){
    if(payementCard.validUntil - new Date() > 0){
        if(payementCard.isActive){
            if(payementCard.balance >= shoppingBag.calculateTotalPrice()){
                payementCard.balance -= shoppingBag.calculateTotalPrice();
                console.log("purchased");
            } else {
                console.log("not enough balance");
            }
        } else {
            console.log("The card is inactive");
        }
    }else{
        console.log("The card is expired");
    }
};




