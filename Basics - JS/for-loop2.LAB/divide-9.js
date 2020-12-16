function solve(number1, number2) {
    let num1 = Number(number1);
    let num2 = Number(number2);


    let space = "";
    let sum = 0;

    // if (num1 > num2) {
    //     let correct = num1;
    //     num1 = num2;
    //     num2 = correct;
    // }

    for (let i = num1; i <= num2; i++) {

        if (i % 9 == 0) {
            sum += i;
            space += i + '\n';
        }

    }
    console.log(`The sum: ${sum}`);
    console.log(space);
}
solve("100", "200");