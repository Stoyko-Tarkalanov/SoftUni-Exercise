 function solve(input) {
    let index = 0;
    let savings = 0;

    let toStart = input[index++];
    while (toStart != "End") {
        let destinatin = toStart;

        let moneyCount = Number(input[index++]);
        while (savings < moneyCount) {
            savings += Number(input[index++]);
            if (savings >= moneyCount) {
                moneyCount = 0;
                savings = 0;
            }
        }

        console.log(`Going to ${destinatin}!`);
        toStart = input[index++];   
    }
}



solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);