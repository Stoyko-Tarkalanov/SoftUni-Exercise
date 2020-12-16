function solve(brstr, strnachas, brdni)
{
let bookForHour = Number(brstr) / Number(strnachas);
let result = bookForHour / Number(brdni);
console.log(result);

}
solve("212", "20", "2");