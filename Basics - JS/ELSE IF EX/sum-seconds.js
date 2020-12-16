function solve(first, second, third) {
    first = Number(first);
    second = Number(second);
    third = Number(third);

    let totalTime = first + second + third;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

solve("50", "50", "49");