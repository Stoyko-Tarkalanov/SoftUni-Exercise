function solve(input) {

    if (input) {

        for (let i = 1; i <= input; i++) {
            console.log('* '.repeat(input));
        }

    } else {
        for (let i = 1; i <= 5; i++) {
            console.log('* '.repeat(input));
        }
    }
}

solve();