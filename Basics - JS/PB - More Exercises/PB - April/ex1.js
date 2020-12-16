function solve(kozunaci, eggs, cookies) {
    kozunaci = Number(kozunaci);
    eggs = Number(eggs);
    cookies = Number(cookies);

    let kozunakPrice = 3.20;
    let eggsPrice12 = 4.35;
    let cookiesPrice = 5.40;
    let eggPrice = 0.15;

    let totalKozunak = kozunaci * kozunakPrice;
    let totalEggs = eggs * eggsPrice12;
    let totalCookies = cookies * cookiesPrice;
    let perEgg = eggs * 12 * eggPrice;

    let totalPrice = totalKozunak + totalEggs + totalCookies + perEgg;
    console.log(totalPrice.toFixed(2));
}
solve("3", "2", "3");