function solve(n) {

    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        let current = n[i];

        switch (current) {
            case "a":
                sum++;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        }
    }
  console.log(sum);
}
solve("hello");