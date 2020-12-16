function solve(input) {
    let wantedNumber = Number(input[0]);
    let combinatins = 0;

    for (let i = 0; i <= wantedNumber; i++) {

        for (let j = 0; j <= wantedNumber; j++) {

            for (let k = 0; k <= wantedNumber; k++) {
                let sum = i + j + k;
                if (sum == wantedNumber) {
                    combinatins++;
                }
            }
        }
    }
    console.log(combinatins);
}
solve(["25"]);