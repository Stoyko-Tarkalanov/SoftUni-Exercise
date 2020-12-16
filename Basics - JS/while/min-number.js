function solve(input) {
    let counter = 0;
    let numbers = input[counter];
    let smallest = Number.MAX_SAFE_INTEGER;

    while (numbers != "Stop") {
        numbers = Number(numbers);

        if (smallest > numbers) {
            smallest = numbers;
        }
        numbers = input[counter++];
    }
    console.log(smallest);
}
solve(["100",
    "99",
    "80",
    "70",
    "Stop"]);


    