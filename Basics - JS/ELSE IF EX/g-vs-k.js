function solve (budget,number,price){
    budget=Number(budget);
    number=Number(number);
    price-Number(price);

    let backGround = budget / 10;
    let clothes = number * price;

    if (number > 150){
        clothes = clothes * 0.90;
    }

    let totalPrice = backGround + clothes; 

    if (budget < totalPrice){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    } else {
            console.log("Action!");
            console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    }
}

solve("9587.88","222","55.68");