function solve(city, sale) {
    sale = Number(sale);

    switch (city) {
        case "Sofia":
            if (0 <= sale && sale <= 500) {
                console.log(`${(sale * 0.05).toFixed(2)}`);
            } else if (500 < sale && sale <= 1000) {
                console.log(`${(sale * 0.07).toFixed(2)}`);
            } else if (1000 < sale && sale <= 10000) {
                console.log(`${(sale * 0.08).toFixed(2)}`);
            } else if (sale > 10000) {
                console.log(`${(sale * 0.12).toFixed(2)}`);
            }
            break;
        case "Varna":
            if (0 <= sale && sale <= 500) {
                console.log(`${(sale * 0.045).toFixed(2)}`);
            } else if (500 < sale && sale <= 1000) {
                console.log(`${(sale * 0.075).toFixed(2)}`);
            } else if (1000 < sale && sale <= 10000) {
                console.log(`${(sale * 0.1).toFixed(2)}`);
            } else if (sale > 10000) {
                console.log(`${(sale * 0.13).toFixed(2)}`);
            }
            break;
        case "Plovdiv":
            if (sale < 0) {
                console.log("error");
            }
            if (0 <= sale && sale <= 500) {
                console.log(`${(sale * 0.055).toFixed(2)}`);
            } else if (500 < sale && sale <= 1000) {
                console.log(`${(sale * 0.08).toFixed(2)}`);
            } else if (1000 < sale && sale <= 10000) {
                console.log(`${(sale * 0.12).toFixed(2)}`);
            } else if (sale > 10000) {
                console.log(`${(sale * 0.145).toFixed(2)}`);
            }
            break;
        default:
            console.log("error");
            break;
    }

}
solve();