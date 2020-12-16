function solve(input) {
    let studentT = 0;
    let standartT = 0;
    let kidsT = 0;
    let index = 0;

    let toStart = input[index++];
    while (toStart != "Finish") {
        let movieName = toStart;
        let ticketsCount = Number(input[index++]);
        let boughtT = 0;

        let ticketT = input[index++];
        while (ticketT != "End") {

            if (ticketT == "standard") {
                standartT++;
            } else if (ticketT == "student") {
                studentT++;
            } else {
                kidsT++;
            }

            boughtT++;
            if (boughtT == ticketsCount) {
                break;
            }

            ticketT = input[index++];
        }

        let percentage = (boughtT / ticketsCount) * 100;
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

        toStart = input[index++];
    }

    let totalT = studentT + standartT + kidsT;
    console.log(`Total tickets: ${totalT}`);
    console.log(`${(studentT / totalT * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartT / totalT * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsT / totalT * 100).toFixed(2)}% kids tickets.`);
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);