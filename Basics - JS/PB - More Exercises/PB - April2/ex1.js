function solve(rent) {
    rent = Number(rent);

    let statue = rent - (rent * 0.3);
    let food = statue - (statue * 0.15);
    let music = food / 2;
    let total = rent + statue + food + music;
    console.log(total.toFixed(2));

}
solve('3500');