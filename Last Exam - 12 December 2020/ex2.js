function solve(input) {
    let dig = Number(input.shift());
    let pattern = /(\*|@)(?<tag>[A-Z][a-z]{2,})\1: (?<first>\[\w\])\|(?<second>\[\w\])\|(?<third>\[\w\])\|/g;

    for (let line of input) {
        let match = line.match(pattern);
        let current = pattern.exec(line);

        let pat2 = /(\[\w\]\|){3,}/g;
        let matcheds = line.match(pat2);
        let ready = match === null ? console.log('Valid message not found!') : calc(matcheds);

        if (match && ready === 3) {
            let tag = current.groups.tag;

            let fir = current.groups.first.replace('[', '').replace(']', '');
            let sec = current.groups.second.replace('[', '').replace(']', '');
            let thr = current.groups.third.replace('[', '').replace(']', '');

            console.log(`${tag}: ${fir.charCodeAt(0)} ${sec.charCodeAt(0)} ${thr.charCodeAt(0)}`);
        } else {
            if (match !== null) {
                console.log('Valid message not found!');
            }
        }
    }

    function calc(stringArr) {
        let string = stringArr.join('').split('|');
        string = string.join('').split('[').join('').split(']');
        let ress = string.length - 1;
        return ress;
    }
}

solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);

solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
]);