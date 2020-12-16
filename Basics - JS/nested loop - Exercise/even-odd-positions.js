function solve(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let space = "";

    for (let i = num1; i <= num2; i++) {
        let digit = i.toString();
        let even = 0;
        let odd = 0;

        for (let j = 0; j < digit.length; j++) {
            let current = Number(digit[j]);

            if (j % 2 === 0) {
                even += current;
            } else {
                odd += current;
            }
        }
        if (even === odd) {
            space += i + " ";
        }
    }
    console.log(space);
}
solve(["100000", "100050"]);