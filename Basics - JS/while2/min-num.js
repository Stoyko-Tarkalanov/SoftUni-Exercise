function solve(input) {
    let i = 0;
    let index = input[i];
    let maxNum = Number.MAX_SAFE_INTEGER;

    while (index != "Stop") {
        let current = Number(index);

        if (maxNum > current) {
            maxNum = current;
        }

        index = input[i++];
    }
    console.log(maxNum);
}
solve(["100",
    "99",
    "80",
    "70",
    "Stop"]);