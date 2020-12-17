function solve(input) {

    let firstSum = calculation(input, 0, (a, b) => a + b);
    let secondSum = calculation(input, 0, (a, b) => a + 1 / b);
    let concat = calculation(input, '', (a, b) => a + b);

    console.log(firstSum);
    console.log(secondSum);
    console.log(concat);

    function calculation(arr, initresult, func) {
        let result = initresult;
        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }
        return result;
    }
}

// solve([2, 4, 8, 16]);
solve([1, 2, 3]);
