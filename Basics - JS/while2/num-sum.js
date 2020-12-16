function solve(input) {
    let index = Number(input[0]);
    let num = 1;
    let counter = 0;

    while (counter < index) {
        let current = Number(input[num++]);
        counter += current;
    }
    console.log(counter);
}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);