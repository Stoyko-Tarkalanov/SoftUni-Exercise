// function solve(input) {
//     let numCheck = Number(input[0]);
//     let index = 1;
//     let sum = 0;

//     while (sum < numCheck) {
//         let nextNum = Number(input[index++]);
//         sum += nextNum;
//     }
//     console.log(sum);
// }

// solve(["100",
//     "10",
//     "20",
//     "30",
//     "40"]);


function solve(input) {
    let mainNumber = Number(input[0]);
    let indexOfNumber = 1;
    let sum = 0;

    while (sum < mainNumber) {
        let currentNumber = Number(input[indexOfNumber++]);
        sum += currentNumber;
    }
    console.log(sum);


}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;
