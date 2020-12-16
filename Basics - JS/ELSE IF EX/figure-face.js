function solve(first, second, third) {
    let firstt = first;

    if (firstt === "square") {
        let a = Number(second);
        let output = a * a.toFixed(3);
        console.log(output);
    } else if (firstt === "rectangle") {
        let a = Number(second);
        let b = Number(third);
        let output = a * b.toFixed(3);
        console.log(output);
    } else if (firstt === "circle") {
        let r = Number(second);
        let output = r * r * Math.PI.toFixed(4);
        console.log(output.toFixed(3));
    } else {
        let a = Number(second);
        let b = Number(third);
        let output = (a * b / 2).toFixed(3);
        console.log(output);
    }
}

solve("circle", "6");