// function solve(input) {
//     let username = input[0];
//     let password = input[1];

//     let index = 2;
//     let prob = input[index++];

//     while (prob != password) {
//         prob = input[index++];
//     }
//     console.log(`Welcome ${username}!`);
// }
// solve(["Nakov",
//     "1234",
//     "Pass",
//     "1324",
//     "1234"]);




function solve(input) {

    let name = input[0];
    let password = input[1];
    let startIndex = 2;

    while (startIndex < input.length) {
        let currentPassword = input[startIndex++];
        if(currentPassword == password){
            console.log(`Welcome ${name}!`);
            break;
        }
    }


}
solve(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);
