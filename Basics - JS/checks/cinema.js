function solve(type, r, c) {
    r = Number(r);
    c = Number(c);
    income = 0.0;
    let Premiere = 12;
    let Normal = 7.5;
    let Discount = 5;

    switch (type) {
        case "Premiere":
            income = Premiere * r * c;
            break;
        case "Normal":
            income = Normal * r * c;
            break;
        case "Discount":
            income = Discount * r * c;
            break;
    }
console.log(income.toFixed(2));
}
solve("Discount", "12", "30");