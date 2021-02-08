function solve(array, startInx, endInx) {
    if (startInx < 0) {
        startInx = 0;
    }

    if (Array.isArray(array) == false) {
        return NaN;
    }

    if (endInx > array.length - 1) {
        endInx = array.length - 1;
    }

    return array.slice(startInx, endInx + 1).reduce((acc, next) => acc += Number(next), 0);
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));