function solve(hourE, minE, hourA, minA) {
    hourE = Number(hourE);
    minE = Number(minE);
    hourA = Number(hourA);
    minA = Number(minA);

    let totalExamMin = hourE * 60 + minE;
    let totalArriveMin = hourA * 60 + minA;
    let time = totalArriveMin - totalExamMin;

    if (time < 0) {
        console.log("Early");
        time = Math.abs(time);

        if (time < 60) {
            console.log(`${time} minutes before the start`);
        } else {
            let min = time % 60;
            let hours = Math.floor(time / 60);

            if (min < 10) {
                console.log(`${hours}:0${min} hours before the start`);
            } else {
                console.log(`${hours}:${min} hours before the start`);
            }
        }

    } else if (time <= 30) {
        console.log("On time");

        if (time > 0) {
            console.log(`${time} minutes after the start`);
        }
    } else {
        console.log("Late");

        if (time < 60) {
            console.log(`${time} minutes after the start`);
        } else {
            let min = time % 60;
            let hours = Math.floor(time / 60);

            if (min < 10) {
                console.log(`${hours}:0${min} hours after the start`);
            } else {
                console.log(`${hours}:${min} hours after the start`);
            }
        }
    }
}
solve("9",
    "00"
    ,"8"
    ,"30");