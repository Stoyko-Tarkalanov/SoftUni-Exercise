function solve(budgetforroom) {

    let budget = Number(budgetforroom);

    let cake = budget * 0.2;
    let drinks =cake * 0.55;
    let show = budget / 3;
    let finalprice = budget + cake + drinks + show;
    console.log(finalprice);

}
solve("2250");