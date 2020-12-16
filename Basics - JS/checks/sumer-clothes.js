function solve(degrees, dayTime) {
    degrees = Number(degrees);
    let Outfit = "";
    let Shoes = "";

    switch (dayTime) {
        case "Morning":
            if (10 <= degrees && degrees <= 18) {
                Outfit = "Sweatshirt";
                Shoes = "Sneakers";
            } else if (18 < degrees && degrees <= 24) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else if (degrees >= 25) {
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (10 <= degrees && degrees <= 18) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else if (18 < degrees && degrees <= 24) {
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            } else if (degrees >= 25) {
                Outfit = "Swimees";
                Shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (10 <= degrees && degrees <= 18) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else if (18 < degrees && degrees <= 24) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else if (degrees >= 25) {
                Outfit = "Shirt";
                Shoes = "Moccasins";
            }
            break;
    }
    console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
}
solve("16", "Morning");