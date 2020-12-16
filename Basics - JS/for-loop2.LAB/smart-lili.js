function solve(age, priceP, priceToy) {
    age = Number(age);
    priceP = Number(priceP);
    priceToy = Number(priceToy);
    let burthdayMoney = 0;
    let toys = 0;
    let moneyCount = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 == 0) {
            moneyCount++;

            burthdayMoney += moneyCount * 10;

        } else {
            toys++;
        }
    }
    burthdayMoney -= moneyCount;
    let totalMoney = burthdayMoney + toys * priceToy;

    if (totalMoney >= priceP) {
        let leftMoney = totalMoney - priceP;
        console.log(`Yes! ${leftMoney.toFixed(2)}`)
    } else {
        let neededMoney = priceP - totalMoney
        console.log(`No! ${neededMoney.toFixed(2)}`)
    }

}
solve("10", "170", "6");