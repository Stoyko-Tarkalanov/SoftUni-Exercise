function solve(years, priceP, priceToy) {
    years = Number(years);
    priceP = Number(priceP);
    priceToy = Number(priceToy);

    let moneyBirthdays = 0;
    let moneyCount = 0;
    let toysCount = 0;

    for (let age = 1; age <= years; age++) {

        if (age % 2 == 0) {
            moneyCount++;
            moneyBirthdays += moneyCount * 10;
        } else {
            toysCount++;
        }
    }
    moneyBirthdays -= moneyCount;
    let totalMoney = moneyBirthdays + toysCount * priceToy;

    if (totalMoney >= priceP) {
        let leftMoney = totalMoney - priceP;
        console.log(`Yes! ${leftMoney.toFixed(2)}`)
    } else {
        let moneyNeeded = priceP - totalMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }
}
solve("10", "170", "6");