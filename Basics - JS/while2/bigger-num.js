function solve(input) {
    let i = 0;
    let index = input[i];
    let minNum = Number.MIN_SAFE_INTEGER;

    while (index != "Stop") {
        let current = Number(index);

        if (current > minNum) {
            minNum = current;
        }
        index = input[i++];
    }
    console.log(minNum);
}
solve(["100",
    "99",
    "80",
    "70",
    "Stop"])
    ;