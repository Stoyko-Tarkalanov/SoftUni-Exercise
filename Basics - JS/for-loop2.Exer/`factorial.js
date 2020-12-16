function solve(number) {
    let num = Number(number);
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        sum *= i;

    }
    console.log(sum);
}
solve("8");