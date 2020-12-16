function solve(input) {
    let mail = input.shift();

    let command = input.shift();
    while (command !== 'Complete') {
        let tokens = command.split(' ');

        if (tokens.join(' ') === 'Make Upper') {
            let current = mail.toUpperCase();
            mail = current;
            console.log(mail);

        } else if (tokens.join(' ') === 'Make Lower') {
            let current = mail.toLowerCase();
            mail = current;
            console.log(mail);

        } else if (tokens[0] === 'GetDomain') {
            let count = Number(tokens[1]);
            mail = mail.split('');
            let current = mail.slice(mail.length - count).join('');
            mail = mail.join('');
            console.log(current);

        } else if (tokens[0] === 'GetUsername') {
            let name = '';

            if (mail.includes('@')) {
                for (let i = 0; i < mail.length; i++) {
                    if (mail[i] === '@') {
                        break;
                    }

                    name += mail[i];
                }
                console.log(name);

            } else {
                console.log(`The email ${mail} doesn't contain the @ symbol.`);
            }

        } else if (tokens[0] === 'Replace') {
            let char = tokens[1];
            let rgx = new RegExp(char, 'g');
            mail = mail.replace(rgx, '-');
            console.log(mail);

        } else if (tokens[0] === 'Encrypt') {
            let lineArr = [];

            for (let char of mail) {
                let current = char.charCodeAt(0);
                lineArr.push(current);
            }

            console.log(lineArr.join(' '));
        }


        command = input.shift();
    }

}


// solve([
//     'Mike123@somemail.com',
//     'Make Upper',
//     'GetDomain 3',
//     'GetUsername',
//     'Encrypt',
//     'Complete'
// ]);

// solve([
//     'AnotherMail.com',
//     'Make Lower',
//     'GetUsername',
//     'Replace a',
//     'Complete'
// ]);

solve([
    'Another@Mail.com',
    'Make Lower',
    'GetUsername',
    'GetDomain 3',
    'Encrypt',
    'Complete'
]);