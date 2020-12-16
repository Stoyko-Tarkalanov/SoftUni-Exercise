function solve(input) {
    let poorGrades = Number(input[0]);
    let index = 1;
    let toStart = input[index];
    let poorGradesCounter = 0;
    let targetHit = false;
    let totalGradesCounet = 0;
    let problemsCount = 0;
    let lastProblem = "";

    while (toStart != "Enough") {
        index++;
        let grades = Number(input[index]);
        totalGradesCounet += grades;

        if (grades <= 4) {
            poorGradesCounter++;

        }

        if (poorGradesCounter == poorGrades) {
            targetHit = true;
            break;
        }

        lastProblem = toStart;
        problemsCount++;
        index++;
        toStart = input[index];
    }

    if (targetHit) {
        console.log(`You need a break, ${poorGradesCounter} poor grades.`)
    } else {
        let averageScore = totalGradesCounet / problemsCount;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);