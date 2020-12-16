function solve(input) {
    let name = input[0];
    let password = input[1];
    let index = 2;
    let current = input[index];

    while(current != password){
        current = input[index++];

        if (current == password){
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