function solve(number1, number2) {
    let num1 = Number(number1);
    let num2 = Number(number2);

    for (let i = num1; i <= num2; i += 4){
        console.log(i);
    }
}
solve("1908", "1919");