function solve(movie, type, tickets) {
    tickets = Number(tickets);
    let price = 0;

    if (movie == "A Star Is Born") {

        if (type == "normal") {
            price = 7.50 * tickets;
        } else if (type == "luxury") {
            price = 10.50 * tickets;
        } else if (type == "ultra luxury") {
            price = 13.50 * tickets;
        }


    } else if (movie == "Bohemian Rhapsody") {

        if (type == "normal") {
            price = 7.35 * tickets;
        } else if (type == "luxury") {
            price = 9.45 * tickets;
        } else if (type == "ultra luxury") {
            price = 12.75 * tickets;
        }

    } else if (movie == "Green Book") {

        if (type == "normal") {
            price = 8.15 * tickets;
        } else if (type == "luxury") {
            price = 10.25 * tickets;
        } else if (type == "ultra luxury") {
            price = 13.25 * tickets;
        }

    } else if (movie == "The Favourite") {

        if (type == "normal") {
            price = 8.75 * tickets;
        } else if (type == "luxury") {
            price = 11.55 * tickets;
        } else if (type == "ultra luxury") {
            price = 13.95 * tickets;
        }

    }
    console.log(`${movie} -> ${price.toFixed(2)} lv.`);
}
solve('A Star Is Born',
    'luxury',
    '42');