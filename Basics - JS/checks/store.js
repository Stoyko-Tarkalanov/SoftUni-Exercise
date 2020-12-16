function solve(product, city, number) {
    number = Number(number);

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                console.log(number * 0.5);
                break;
            case "water":
                console.log(number * 0.8);
                break;
            case "beer":
                console.log(number * 1.20);
                break;
            case "sweets":
                console.log(number * 1.45);
                break;
            case "peanuts":
                console.log(number * 1.60);
                break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                console.log(number * 0.4);
                break;
            case "water":
                console.log(number * 0.7);
                break;
            case "beer":
                console.log(number * 1.15);
                break;
            case "sweets":
                console.log(number * 1.30);
                break;
            case "peanuts":
                console.log(number * 1.50);
                break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee":
                console.log(number * 0.45);
                break;
            case "water":
                console.log(number * 0.7);
                break;
            case "beer":
                console.log(number * 1.10);
                break;
            case "sweets":
                console.log(number * 1.35);
                break;
            case "peanuts":
                console.log(number * 1.55);
                break;
        }
    }
}
solve("coffee", "Varna", "2");