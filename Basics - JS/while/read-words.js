function solve(input) {
    let index = 0;
    let name = input[index];

    while (name != "Stop") {
        name = input[index++];

        if (name == "Stop") {
            break;
        }

        console.log(name);
    }

}
solve(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);