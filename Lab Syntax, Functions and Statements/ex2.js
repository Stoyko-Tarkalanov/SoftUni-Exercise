function solve(operand1, operand2, operator) {
    let result = null;

    switch (operator) {
        case '+': result = operand1 + operand2; break;
        case '-': result = operand1 - operand2; break;
        case '*': result = operand1 * operand2; break;
        case '/': result = operand1 / operand2; break;
        case '%': result = operand1 % operand2; break;
        case '**': result = operand1 ** operand2; break;
    }

    console.log(result);
}

solve(5, 6, '+');