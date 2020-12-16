function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let output = "";

    for (let current = num1; current <= num2; current++) {

        if(current% 9 ==0){
            sum += current;
            output += current + " ";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);

}
solve("100", "200");