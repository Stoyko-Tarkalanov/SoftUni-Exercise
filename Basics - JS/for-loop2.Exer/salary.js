function solve(input) {
    let n = input[0];
    let salary = input[1];

    for (let i = 2; i < input.length; i++) {
        let current = input[i];

        if (salary <= 0) {
            break;
        }

        switch (current){
            case "Facebook":
            salary -= 150;
            break;
            case "Instagram":
            salary -= 100;
            break;
            case "Reddit":
            salary -= 50;
            break;
        }

    }
    
    if (salary <= 0){
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }

}

solve(["3", "500", "Facebook", "Stackover.com", "softuni.bg"]);