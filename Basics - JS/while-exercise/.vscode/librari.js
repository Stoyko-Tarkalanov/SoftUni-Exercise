function solve(input) {
    let serchedBook = input[0];
    let index = 1;
    let toStart = input[index];
    let bookCounter = 0;

    while (toStart != "No More Books") {

        if (toStart == "No More Books") {
            break;
        }

        if (toStart == serchedBook) {
            break;
        }

        bookCounter++;
        index++;
        toStart = input[index];
    }

    if (toStart == serchedBook) {
        console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`)
    }
}
solve(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);