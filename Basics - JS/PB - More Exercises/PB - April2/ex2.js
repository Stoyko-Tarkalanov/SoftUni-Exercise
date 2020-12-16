function solve(budget, actors, clothes) {
    budget = Number(budget);
    actors = Number(actors);
    clothes = Number(clothes);

    let decor = budget * 0.1;
    let clothesSum = actors * clothes;

    if (actors > 150) {
        clothesSum = clothesSum - (clothesSum * 0.1);
    }

    let totalSum = decor + clothesSum;
    let leftMoney = Math.abs(budget - totalSum);


    if (totalSum > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }
}

// solve('20000',
//     '120',
//     '55.5');

solve('15437.62',
    '186',
    '57.99'
);

// solve('9587.88',
//     '222',
//     '55.68'
// )