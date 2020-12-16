function solve(budget, season) {
    budget = Number(budget);
    let price =0.0;
    if (budget <= 100) {

        if (season === "summer"){
            price = (budget * 0.3).toFixed(2);
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${price}`);
        } else if(season === "winter"){
            price = (budget * 0.7).toFixed(2);
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${price}`);
        }

    } else if (budget <= 1000) {

        if (season === "summer"){
            price = (budget * 0.4).toFixed(2);
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${price}`);
        } else if(season === "winter"){
            price = (budget * 0.8).toFixed(2);
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${price}`);
        }

    } else if (budget >= 1000) {

        if (season === "summer"){
            price = (budget * 0.9).toFixed(2);
            console.log("Somewhere in Europe");
            console.log(`Camp - ${price}`);
        } else if(season === "winter"){
            price = (budget * 0.9).toFixed(2);
            console.log("Somewhere in Europe");
            console.log(`Hotel - ${price}`);
        }

    }

}
solve("1500", "summer");