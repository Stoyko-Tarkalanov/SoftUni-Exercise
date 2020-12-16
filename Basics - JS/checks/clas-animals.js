function solve(animal) {

    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "snake":
        case "crocodile":
        case "tortoise":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}
solve("cat");