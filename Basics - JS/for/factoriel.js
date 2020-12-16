function solve(num) {
    num = Number(num);
    let fact = 1;

    for (let i = 1; i <= num; i++){
        fact *=i
    }
    console.log(fact);
}
solve("4");