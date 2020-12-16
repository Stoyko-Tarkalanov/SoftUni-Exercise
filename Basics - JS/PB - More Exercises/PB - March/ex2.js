function solve(minWalk, numWalks, calories) {
    minWalk = Number(minWalk);
    numWalks = Number(numWalks);
    calories = Number(calories);

    let totalMinWalk = minWalk * numWalks; // minuti walk
    let totalBurnedPerDay = totalMinWalk * 5; //burned cal
    let gett = calories * 0.5;

    if (totalBurnedPerDay >= gett) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedPerDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedPerDay}.`);
    }

}
solve("60", "70", "5000");