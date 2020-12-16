function solve(input) {
    let movieNumbers = input[0];
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    // for (let i = 1; i <= movieNumbers; i++) {

    let count = 0;
    let averageRating = 0;
    let highName = "";
    let minName = "";

    let index = 1;
    toStart = input[index];
    while (count < movieNumbers) {

        let name = toStart;
        toStart = Number(input[++index]);
        let rating = toStart;

        if (rating > max) {
            highName = name;
            max = rating;
        }

        if (rating < min) {
            minName = name;
            min = rating;
        }
        averageRating += rating;

        toStart = input[++index];
        count++;
    }
    console.log(`${highName} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${minName} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / movieNumbers).toFixed(1)}`);
}
solve([
    '5', 'A Star is Born',
    '7.8', 'Creed 2',
    '7.3', 'Mary Poppins',
    '7.2', 'Vice',
    '7.2', 'Captain Marvel',
    '7.1']);