function solve(days, roomType, rating) {
    days = Number(days);
    let price = 0.0;
    let nights = days - 1

    switch (roomType) {
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            if (days < 10) {
                price = price * 0.7;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            } else if (days > 15) {
                price = price * 50;
            }
            break;
        case "president apartment":
            price = nights * 35;
            if (days < 10) {
                price = price * 0.9;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            } else if (days > 15) {
                price = price * 80;
            }
            break;
    }
    if(rating === "positiv"){
        price = price * 1.25;
    } else {
        price = price * 0.9;
    }

    console.log(price.toFixed(2));

}
solve("14", "apartment", "positiv");