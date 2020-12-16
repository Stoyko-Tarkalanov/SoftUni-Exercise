function solve(age, gender) {
    age = Number(age);

    if (age < 16) {
        if (gender === "f") {
            console.log("Miss");
        } else if (gender === "m") {
            console.log("Master");
        }
    } else if (age >= 16) {
        if (gender === "f") {
            console.log("Ms.");
        } else if (gender === "m") {
            console.log("Mr.");
        }

    }

}
solve("13.5", "m");