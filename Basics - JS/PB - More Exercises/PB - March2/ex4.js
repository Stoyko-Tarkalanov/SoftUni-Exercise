function solve(input) {
    let index = 1;
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= groups; i++) {

        let alpinist = Number(input[index++]);

        if (alpinist <= 5) {
            musala += alpinist;
        } else if (alpinist >= 6 && alpinist <= 12) {
            monblan += alpinist;
        } else if (alpinist >= 13 && alpinist <= 25) {
            kilimanjaro += alpinist;
        } else if (alpinist >= 26 && alpinist <= 40) {
            k2 += alpinist;
        } else if (alpinist >= 41) {
            everest += alpinist;
        }


    }

    let totalPeople = musala + monblan + kilimanjaro + k2 + everest;
    musala = musala / totalPeople * 100;
    monblan = monblan / totalPeople * 100;
    kilimanjaro = kilimanjaro / totalPeople * 100;
    k2 = k2 / totalPeople * 100;
    everest = everest / totalPeople * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimanjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);

}
solve([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
]
);