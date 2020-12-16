function solve(input) {
    let tournamentDays = 0;
    let winDay = 0;
    let loseDay = 0;
    let totalProfits = 0;
    let i = 1;

    let dayCounter = 0;
    let n = Number(input[tournamentDays]);
    while (dayCounter <= n) {
        if (dayCounter == n) {
            break;
        }

        dayCounter++;
        let todayWin = 0;
        let todayWinMoney = 0;
        let todayLose = 0;
        let todayProfits = 0;


        let start = input[i++];
        while (start != "Finish") {

            start = input[i++];

            if (start == "win") {
                todayWin++;
                todayWinMoney += 20;
            } else if (start == "lose") {
                todayLose++;
            }
        }


        if (todayWin > todayLose) {
            todayProfits = todayWinMoney * 0.1 + todayWinMoney;
            winDay++;
        } else {
            todayProfits += todayWinMoney;
            loseDay++;
        }

        totalProfits += todayProfits;


    }


    if (winDay > loseDay) {
        let finalProfits = totalProfits * 0.2 + totalProfits;
        console.log(`You won the tournament! Total raised money: ${finalProfits.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalProfits.toFixed(2)}`);
    }
}

solve([
    '3', 'darts',
    'lose', 'handball',
    'lose', 'judo',
    'win', 'Finish',
    'snooker', 'lose',
    'swimming', 'lose',
    'squash', 'lose',
    'table tennis', 'win',
    'Finish', 'volleyball',
    'win', 'basketball',
    'win', 'Finish'
]);