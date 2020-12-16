function solve(destination, date, nights) {
    nights = Number(nights);
    let toPay = 0;

    if (destination == "Germany") {

        if (date == "21-23") {
            toPay = nights * 32;
        } else if (date == "24-27") {
            toPay = nights * 37;
        } else if (date == "28-31") {
            toPay = nights * 43;
        }

    } else if (destination == "Italy") {

        if (date == "21-23") {
            toPay = nights * 28;
        } else if (date == "24-27") {
            toPay = nights * 32;
        } else if (date == "28-31") {
            toPay = nights * 39;
        }
    } else if (destination == "France") {

        if (date == "21-23") {
            toPay = nights * 30;
        } else if (date == "24-27") {
            toPay = nights * 35;
        } else if (date == "28-31") {
            toPay = nights * 40;
        }
    }
console.log(`Easter trip to ${destination} : ${toPay.toFixed(2)} leva.`);
}
solve("Germany", "24-27", "5");