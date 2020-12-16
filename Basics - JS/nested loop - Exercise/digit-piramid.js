function solve(input) {
    let n = Number(input[0]);
    let count = 1;
    let flag = false;


    for (let i = 1; i <= n; i++) {
        let space = "";
        for (let j = 0; j < i; j++) {

            space += count + " ";

            if (count === n) {
                flag = true;
                break;
            }

            count++;
        }

        console.log(space);

        if (flag) {
            break;
        }
    }
}
solve(["7"]);