function solve(record, distanceMeters, timeSeconds) {
    record = Number(record);
    distanceMeters = Number(distanceMeters);
    timeSeconds = Number(timeSeconds);

    let toWalk = distanceMeters * timeSeconds; //seconds
    let delay = Math.floor(distanceMeters / 50) * 30;
    let totalTime = toWalk + delay;

    if (record > totalTime) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else { 
        let needed = totalTime - record
        console.log(`No! He was ${needed.toFixed(2)} seconds slower.`);
    }

}
solve("1377", "389", "3")