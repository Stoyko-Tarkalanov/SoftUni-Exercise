function solve(year, randomYear) {
    year = Number(year);
    randomYear = Number(randomYear);

    for (let i = year; i <= randomYear; i += 4) {
        console.log(i);
    }
}
solve("1908","1919");