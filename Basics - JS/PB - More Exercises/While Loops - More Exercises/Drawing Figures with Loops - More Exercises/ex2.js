function solve(input) {
    let n = Number(input[0]);

    for (let j = 1; j <= n; j++) {
        let space = "";
        for (let i = 1; i <= n; i++) {
            space += "*";

        }
        console.log(space);
    }

}

solve(['4'])