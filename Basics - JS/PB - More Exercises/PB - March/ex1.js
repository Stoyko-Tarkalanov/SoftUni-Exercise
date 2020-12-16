function solve(bitCoin, chinaY, commision) {
    bitCoin = Number(bitCoin);
    chinaY = Number(chinaY);
    commision = Number(commision);

    bitCoin *= 1168; //leva
    chinaY *= 0.15; //dollar
    let china =chinaY * 1.76; // leva

    let totalSum = bitCoin + china; // leva
    totalSum /= 1.95;    // evro
     
    let com = commision / 100 * totalSum;
    let finalR = totalSum - com;

    console.log(finalR.toFixed(2))


}
solve("1", "5", "5")