function solve(guests, kuvert, budget) {
    guests = Number(guests);
    kuvert = Number(kuvert);
    budget = Number(budget);
    let perOne = 0;

    if (guests >= 10 && guests <= 15) {
        perOne = kuvert - (kuvert * 0.15);
    } else if (guests > 15 && guests <= 20) {
        perOne = kuvert - (kuvert * 0.20);
    } else if (guests > 20) {
        perOne = kuvert - (kuvert * 0.25);
    } else {
        perOne = kuvert;
    }

    let cakePrice = budget * 0.1;
    let totalSum = guests * perOne + cakePrice;

    if (totalSum > budget) {
        console.log(`No party! ${(totalSum - budget).toFixed(2)} leva needed.`)
    } else {
        console.log(`It is party time! ${(budget - totalSum).toFixed(2)} leva left.`)
    }
}
solve("8", "25", "340")