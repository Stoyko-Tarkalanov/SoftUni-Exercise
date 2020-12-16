// function solve(input){
//     let n = Number(input[0]);
//     let k = 1;

//     while ( k <= n){
//         console.log(k) 
//         k *= 2 +1
//     }


// }

// solve(["3"]);

function solve(input) {
    let n = input[0];
    let num = 1;

    while (num <= n) {
        console.log(num);
        num = num * 2 + 1;
    }

}
solve(["3"]);