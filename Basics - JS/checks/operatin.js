function solve(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = 0;

    if (n2 == "0") {
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        console.log(`Cannot divide ${n2} by zero`);
    }

    switch (operator) {

        case "+":
            if (n1 + n2) {
                result = n1 + n2;
                if (result % 2 === 0) {
                    console.log(`${n1} + ${n2} = ${result} - even`);
                } else {
                    console.log(`${n1} + ${n2} = ${result} - odd`);
                }
            }
            break;
        case "-":
            if (n1 - n2) {
                result = n1 - n2;
                if (result % 2 === 0) {
                    console.log(`${n1} - ${n2} = ${result} - even`);
                } else {
                    console.log(`${n1} - ${n2} = ${result} - odd`);
                }
            }
            break;
        case "*":
            if (n1 * n2) {
                result = n1 * n2
                if (result % 2 === 0) {
                    console.log(`${n1} * ${n2} = ${result} - even`);
                } else {
                    console.log(`${n1} * ${n2} = ${result} - odd`);
                }
            }
            break;
        case "/":
            if (n1 / n2) {
                result = n1 / n2;
                if (result = n1 / n2) {
                    console.log(`${n1} + ${n2} = ${(result).toFixed(2)}`);
                } else {
                    console.log(`${n1} + ${n2} = ${(result).toFixed(2)}`);
                }
            }
            break;
        case "%":
            if (n1 % n2) {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;            
    }



}
solve("112", "0", "/");

