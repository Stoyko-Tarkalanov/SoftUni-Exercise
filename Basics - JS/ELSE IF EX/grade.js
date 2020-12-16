function solve(grade) {
    grade = Number(grade);

    if (grade >= 5.50) {
        console.log("Otlichen!");
    } else if (grade >= 4.50) {
        console.log("Mn. dobar");
    } else if (grade >= 3.50) {
        console.log("Dobar");
    } else if (grade >= 3) {
        console.log("Sreden");
    } else {
        console.log("Slab");
    }
}

solve("6");

