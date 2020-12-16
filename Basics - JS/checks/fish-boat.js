function solve(budget1, season, workers1) {
    let budget = Number(budget1);
    let workers = Number(workers1);
    let taxes = 1;
    let discount = 0;

    switch (season) {
        case "Spring":
            taxes = 3000;
            if (workers <= 6) {
                discount = taxes - (taxes * 0.1);
            } else if (workers >= 7 && workers <= 11) {
                discount = taxes - (taxes * 0.15);
            } else {
                discount = taxes - (taxes * 0.25);
            }
            if (workers % 2 === 0) {
                discount -= discount * 0.05;
            }
            break;
        case "Summer":
            taxes = 4200;
            if (workers <= 6) {
                discount = taxes - (taxes * 0.1);
            } else if (workers >= 7 && workers <= 11) {
                discount = taxes - (taxes * 0.15);
            } else {
                discount = taxes - (taxes * 0.25);
            }
            if (workers % 2 === 0) {
                discount -= discount * 0.05;
            }
            break;
        case "Autumn":
            taxes = 4200;
            if (workers <= 6) {
                discount = taxes - (taxes * 0.1);
            } else if (workers >= 7 && workers <= 11) {
                discount = taxes - (taxes * 0.15);
            } else {
                discount = taxes - (taxes * 0.25);
            }
            break;
        case "Winter":
            taxes = 2600;
            if (workers <= 6) {
                discount = taxes - (taxes * 0.1);
            } else if (workers >= 7 && workers <= 11) {
                discount = taxes - (taxes * 0.15);
            } else {
                discount = taxes - (taxes * 0.25);
            }
            if (workers % 2 === 0) {
                discount -= discount * 0.05;
            }
            break;
    }
    if (budget >= discount) {
        console.log(`Yes! You have ${(budget - discount).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(discount - budget).toFixed(2)} leva.`);
    }
}
solve("2000", "Winter", "13");