function solve(product) {

    if (product == "banana" || "apple" || "kiwi" || "cherry" || "lemon" || "grapes" || "tomato" || "cucumber" || "pepper" || "carrot") {
        switch (product) {
            case "banana":
            case "apple":
            case "kiwi":
            case "cherry":
            case "lemon":
            case "grapes":
                console.log("fruit");
                break;
            case "tomato":
            case "cucumber":
            case "pepper":
            case "carrot":
                console.log("vegetable");
                break;
            default:
                console.log("unknown");
                break;
        }
    }
}
solve("carot");