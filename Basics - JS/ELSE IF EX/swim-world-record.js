function solve(recordSeconds, distanceMeters, distanceInSecMeters) {
    recordSeconds = Number(recordSeconds);
    distanceMeters = Number(distanceMeters);
    distanceInSecMeters = Number(distanceInSecMeters);

    let toSwin = distanceMeters * distanceInSecMeters;
    let deley = Math.floor(distanceMeters / 15) * 12.5;
    let totalTime = toSwin + deley;

    if (totalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`);
    }
}

solve("10464", "1500", "20");
// solve("55555.67", "3017", "5.03");
