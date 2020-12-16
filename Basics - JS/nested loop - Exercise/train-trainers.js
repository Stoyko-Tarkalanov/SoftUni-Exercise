function solve(input) {
    let n = Number(input[0]);
    index = 1;

    let totalAverage = 0;
    let count = 0;
    let toStart = input[index];

    while (toStart != "Finish") {
        count++;
        let averageGrade = 0;

        for (let i = 0; i < n; i++) {

            let grade = Number(input[++index]);
            averageGrade += grade;
        }

        averageGrade /= n;
        totalAverage += averageGrade;
        console.log(`${toStart} - ${averageGrade.toFixed(2)}.`);

        toStart = input[++index];
    }
    console.log(`Student's final assessment is ${(totalAverage / count).toFixed(2)}.`);
}
solve(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);