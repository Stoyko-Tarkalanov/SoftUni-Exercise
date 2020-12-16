function solve() {
    let input = arguments;
    let voucherSum = input[0];
    let tickets = 0;
    let other = 0;

    let index = 1;
    let toStart = input[index];

    while (toStart != "End") {
        let price = 0;

        if (toStart.length > 8) {

            price = toStart.charCodeAt(0) + toStart.charCodeAt(1);
        } else {
            price = toStart.charCodeAt(0);
        }

        if (price > voucherSum) {
            break;
        }

        voucherSum -= price;
        if (toStart.length > 8) {
            tickets++;
        } else {
            other++;
        }

        toStart = input[++index];
    }

    console.log(tickets);
    console.log(other);
}
solve('300', 'Captain Marvel', 'popcorn', 'Pepsi');