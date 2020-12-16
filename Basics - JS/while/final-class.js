function solve(input) {
    let failCounter = 0;
    let gradeCounter = 1;
    let name = input[0];
    let grades = 0;
    let sum = 0;

    while (gradeCounter <= 12) {
        let currentGrade = Number(input[gradeCounter]);

        if (currentGrade < 4) {
            failCounter++;
            if (failCounter == 2) {
                break;
            }
        }

        sum += currentGrade;
        grades++;
        gradeCounter++;
    }
    sum /= 12;

    if (failCounter == 2) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${sum.toFixed(2)}`);
    }

}
solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);