function solve(num) { /// FIRST

    let problem = (/([0-9]).*?\1/).test(num);
    console.log(problem);

}
solve([1, 10, 11, 1010, 1981].map(solve));


function solve(num) { /// SECOND
    num = parseInt(num);
    let year = num / 365;

    if (year % 4 == 0) {
        console.log(`Math.floor(year) - is Leap year`);
    } else {
        console.log(Math.floor(year));
    }

}
solve(450527);


function solve() { /// THIRD

    let a = parseInt('A',16); // first
    let b = 3; // second 
    let c = a * b; // operation
    let aDisplay = c.toString(16); // toDO... 
    console.log(aDisplay);
}
solve();


function solve(time) {  /// FOURTH
    time = parseInt(time);

    for (let i = time; i > 0; i--) {
        if (i <= 0) {
            break;
        }
        console.log(`Time left: ${i}`);
    }
}
solve(5);



function solve(a, b, c, pow1, pow2) { /// FIFTH
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    pow1 = parseInt(pow1);
    pow2 = parseInt(pow2);

    let equatin = (a ** pow1) + (b ** pow2) + c; // -> когато имаме (а ** 4) означава, че вдигаме на степен;
    console.log(equatin);                   // 'а' ** -> казваш, вдигни ми числото 'а' на '**' степен...

}
solve(2, 3, 1, 4, 2);


function solve(x, y) { ///FINAL
    x = Number(x);
    y = Number(y);

    let booleanFlag = true;
    

    if (x == 0) {
        booleanFlag = false;
        console.log(`Undefined`);
    } else if (y == 0) {
        booleanFlag = false;
        console.log(`Undefined`);
    }

    if (booleanFlag) {

        if (x <= 1 && y <= 1) {
            console.log(`Black`);
        } else if (x <= 1 && y >= 1) {
            console.log(`White`);
        } else if (y <= 1 && x >= 1) {
            console.log(`White`);
        } else if (x >= 2 && x <= 3 && y >= 2 && y <= 3) {
            console.log(`Black`);
        } else if (x > 3) {
            console.log(`Outside`);
        } else if (y > 3) {
            console.log(`Outside`);
        }
    }
}
solve(0, 2);