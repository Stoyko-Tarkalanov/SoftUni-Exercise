function solve(input) {
    let totalSpace = Number(input[0]);
    let couter = 0;
    let command = 0;

    let index = 1;
    let toStart = input[index];
    while (toStart != "End") {

        command = Number(input[index]);

        if ((couter + 1) % 3 === 0) {
            command *= 1.10;
          }

        if (totalSpace < command) {
            break;
        }
        couter++;
        totalSpace -= command;

        toStart = input[++index];
    }

    if (toStart == "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }

    console.log(`Statistic: ${couter} suitcases loaded.`);
}

solve(["700.5", "180", "340.6", "126", "220"]);

//solve(['550', '100', '252', '72', 'End']);

//solve(['1200.2', '260', '380.5', '125.6', '305', 'End']);