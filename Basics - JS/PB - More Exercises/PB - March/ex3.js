function solve(fruit, size, howMany) {
    howMany = Number(howMany);
    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size == "big") {
                price = 5 * 28.70;
                price *= howMany;
            } else {
                price = 2 * 56;
                price *= howMany;
            }
            break;
        case "Mango":
            if (size == "big") {
                price = 5 * 19.60;
                price *= howMany;
            } else {
                price = 2 * 36.66;
                price *= howMany;
            }
            break;
        case "Pineapple":
            if (size == "big") {
                price = 5 * 24.80;
                price *= howMany;
            } else {
                price = 2 * 42.10;
                price *= howMany;
            }
            break;
        case "Raspberry":
            if (size == "big") {
                price = 5 * 15.20;
                price *= howMany;
            } else {
                price = 2 * 20;
                price *= howMany;
            }
            break;
    }

    if (price >= 400 && price <= 1000) {
        price = price - price * 0.15;
    } else if (price >= 1001) {
        price = price - price * 0.5;
    }
    console.log(`${price.toFixed(2)} lv.`)
}
solve("Mango", "big", "8")