function solve(time, day) {
    time = Number(time);

    if (time < 18 && time >= 10) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
        }
    }// else {
        console.log("closed");
    //}
}
solve("19", "Friday");