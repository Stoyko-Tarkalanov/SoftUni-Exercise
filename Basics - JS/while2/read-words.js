function solve(input) {
    let n = 0;
    let names = input[n];

    while (names != "Stop") {
        names = input[n++]

        if (names == "Stop") {
            break;
        }

        console.log(names);
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