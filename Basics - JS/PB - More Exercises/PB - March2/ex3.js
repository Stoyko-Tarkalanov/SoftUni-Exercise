// function solve(money, gender, age, sport) {
//     money = Number(money);
//     age = Number(age);
//     let price = 0;

//     if (gender == "m") {

//         switch (sport) {

//             case "Gym":
//                 price = 42;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Boxing":
//                 price = 41;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Yoga":
//                 price = 45;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Zumba":
//                 price = 34;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Dances":
//                 price = 51;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Pilates":
//                 price = 39;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;
//         }


//     } else if (gender == "f") {

//         switch (sport) {

//             case "Gym":
//                 price = 35;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Boxing":
//                 price = 37;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Yoga":
//                 price = 42;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Zumba":
//                 price = 31;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Dances":
//                 price = 53;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;

//             case "Pilates":
//                 price = 37;

//                 if (money <= price) {
//                     if (age <= 19) {
//                         price = price - (price * 0.2);
//                     }
//                     console.log(`You don't have enough money! You need $${(price - money).toFixed(2)} more.`);
//                 } else if (money >= price) {
//                     console.log(`You purchased a 1 month pass for ${sport}.`);
//                 }
//                 break;
//         }
//     }
// }



function solve(money, gender, age, sport) {
    money = Number(money);
    age = Number(age);
    let price = 0;

    if (gender === "m") {
        if (sport === "Gym") {
            price = 42;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Boxing") {
            price = 41;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Yoga") {
            price = 45;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Zumba") {
            price = 34;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Dances") {
            price = 51;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Pilates") {
            price = 39;
            if (age <= 19) {
                price = price * 0.80;
            }
        }
    } else if (gender === "f") {
        if (sport === "Gym") {
            price = 35;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Boxing") {
            price = 37;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Yoga") {
            price = 42;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Zumba") {
            price = 31;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Dances") {
            price = 53;
            if (age <= 19) {
                price = price * 0.80;
            }
        } else if (sport === "Pilates") {
            price = 37;
            if (age <= 19) {
                price = price * 0.80;
            }
        }

    }
    if (money >= price) {
        console.log(`You purchased a 1 month pass for ${sport}.`)
    } else {
        let difference = price - money;
        console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`)
    }

}


solve("20", "f", "15", "Yoga")