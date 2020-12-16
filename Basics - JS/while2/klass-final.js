function solve(input) {
    let name = input[0];
    let index = 1;
    let yearCounter = 0;
    let failCounter = 0;
    let gradeCounter = 0;

    while (yearCounter <= 12) {
        let current = Number(input[index]);

        if (current < 4) {
            failCounter++;

            if (failCounter == 2) {
                break;
            }
        }

        gradeCounter += current;
        yearCounter++;
        index++;
    }
    let averageGrade = gradeCounter / 12;

    if (failCounter == 2) {
        console.log(`${name} has been excluded at ${yearCounter} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
solve(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);