function solve(first, second, third) {

    first = Number(first);
    let result = 0;

    if (second === "mm") {
        result = first / 1000;
    } else if (second === "cm") {
        result = first / 100;
    } else if (second === "m") {
        result = first;
    }

    if (third === "mm") {
        result = result * 1000;
    } else if (third === "cm") {
        result = result * 100;
    }

    console.log(result.toFixed(3));
}

solve("12", "m", "mm");