function solve(input) {
    let tickets = 0;
    let stud = 0;
    let stand = 0;
    let k = 0;

    let index = 0;
    let movieName = input[index++];
    while (movieName != "Finish") {
        let totalSeats = input[index];
        let totalTickets = 0;

        let toStart = input[index++];
        while (toStart != "End") {
            let standard = 0;
            let student = 0;
            let kid = 0;

            if (toStart == 'standard') {
                standard++;
                totalTickets += standard;
            } else if (toStart == 'student') {
                student++;
                totalTickets += student;
            } else if (toStart == 'kid') {
                kid++;
                totalTickets += kid;
            }
            stud += student;
            stand += standard;
            k += kid;

            toStart = input[index++];
            if (toStart == "Finish") {
                break;
            }
        }
        tickets += totalTickets;

        let percentage = (totalTickets / totalSeats * 100).toFixed(2);
        console.log(`${movieName} - ${percentage}% full.`);
        if (toStart == "Finish") {
            break;
        }

        movieName = input[index++];
    }

    console.log(`Total tickets: ${tickets}`);
    console.log(`${(stud / tickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(stand / tickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(k / tickets * 100).toFixed(2)}% kids tickets.`);
}
solve([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
]
);