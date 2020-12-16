function solve(input) {
    let n = Number(input[0]);
    let min = Number.MAX_VALUE;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);

        if (min > current) {
            min = current;
        }
    }
    console.log(Math.min(min));
}
solve(["4", "45", "-20", "7", "99"]);
