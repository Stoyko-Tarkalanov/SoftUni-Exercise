function solve(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        let space = "";

        for (let j = 1; j <= i; j++) {
        space += "$" + " ";
        } 
        console.log(space);
    }

}
solve(['2'])