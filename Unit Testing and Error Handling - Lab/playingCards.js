function solve(face, suit) {
    let faces = ['2', '3', '4', ' 5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suites = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    if (faces.includes(face) == face) {
        throw new Error('Invalid face');
    } else if (Object.keys(suites).includes(suit) == false) {
        throw new Error('Invalid suit');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suites[suit]}`;
        }
    };
}


console.log(solve('A', 'S'));