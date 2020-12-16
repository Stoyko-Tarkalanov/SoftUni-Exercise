function solve(input) {
    let index = 0;
    let command = input[index];

    let primeS = 0;
    let nonPrimeS = 0;

    while (command != "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
        } else if (num === 1) {
            primeS += num;
        } else {
            let count = 0;
            for (let i = 0; i <= num; i++) {

                if (num % i == 0) {
                    count++;
                }
            }

            if (count == 2) {
                primeS += num;
            } else {
                nonPrimeS += num;
            }
        }
        command = input[++index];
    }

    console.log(`Sum of all prime numbers is: ${primeS}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeS}`);
}
solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);