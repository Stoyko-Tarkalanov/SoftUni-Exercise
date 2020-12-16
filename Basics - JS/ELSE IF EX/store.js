function solve(excursionPrice, puzzels, doll, bear, minions, truck) {
  excursionPrice = Number(excursionPrice);
  puzzels = Number(puzzels);
  doll = Number(doll);
  bear = Number(bear);
  minions = Number(minions);
  truck = Number(truck);

  let pricePuzzels = 2.60;
  let priceDolls = 3.00;
  let priceBears = 4.10;
  let priceMinions = 8.20;
  let priceTrucks = 2.00;

  let sum = puzzels * pricePuzzels + doll * priceDolls + bear * priceBears + minions * priceMinions + truck * priceTrucks;
  let toys = puzzels + doll + bear + minions + truck;

  if (toys >= 50) {
    let disscount = sum * 0.25;
    let finalPrice = sum - disscount;
    let rent = finalPrice * 0.1;
    let earnd = finalPrice - rent;
    let end = earnd - excursionPrice;
    console.log(`Yes! ${end.toFixed(2)} lv left.`);
  } else {
    let rent = sum * 0.1;
    let earned = sum - rent;
    let finall = excursionPrice - earned;
    console.log(`Not enough money! ${finall.toFixed(2)} lv needed.`);
  }
}

solve("320", "8", "2", "5", "5", "1");
