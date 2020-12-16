function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let type = "";
        let floorOutput = "";

        if (i === floors) {
            type = "L";
        } else if (i % 2 === 1) {
            type = "A";
        } else {
            type = "O";
        }

        for (let j = 0; j < rooms; j++) {
            floorOutput += `${type}${i}${j} `;
        }
        console.log(floorOutput);
    }
}
solve(["6"], ["4"]);