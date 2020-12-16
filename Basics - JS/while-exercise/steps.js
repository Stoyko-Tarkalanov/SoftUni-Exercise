function solve(input) {
    let index = 0;
    let toWalk = input[index];
    let stepsCounter = 0;
    let goal = 10000;

    while (stepsCounter < goal) {
        toWalk = input[index++];

        if (toWalk === "Going home") {
            let finalWalk = input[index++]
            stepsCounter += Number(finalWalk);
            break;
        }

        stepsCounter += Number(toWalk);
    }

    if (stepsCounter > goal) {
        let final = stepsCounter - goal;
        console.log(`Goal reached! Good job!`);
        console.log(`${final} steps over the goal!`);
    } else if (toWalk === "Going home") {
        let finalSteps = goal - stepsCounter;
        console.log(`${finalSteps} more steps to reach goal.`);
    }
}
solve(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"]);