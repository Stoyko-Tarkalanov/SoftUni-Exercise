function solve(incomeBgn, avarageGrade, minSalary) {
    incomeBgn = Number(incomeBgn);
    avarageGrade = Number(avarageGrade);
    minSalary = Number(minSalary);

    if (incomeBgn > minSalary) {
        console.log("You cannot get a scholarship!");
    } else if (avarageGrade < 5.50) {
        console.log("You cannot get a scholarship!");
    }

    if (incomeBgn < minSalary && avarageGrade > 4.50 && avarageGrade < 5.50) {
        let money = minSalary * 0.35;
        console.log(`You get a Social scholarship ${money} BGN`);
    } else if (avarageGrade > 5.50) {
        let get = avarageGrade * 25;
        console.log(`You get a Social scholarship for exelent scholarship ${get} BGN`);
    }
}

// solve("480.00","4.60","450.00");
solve("300.00", "5.65", "420.00");