function solve(n, m) {
    let startNum = Number(n);
    let endNum = Number(m);

    let result = 0;
    for (let i = startNum; i <= endNum; i++) {
        result += i;
    }
    console.log(result);
}

solve('-8', '20');