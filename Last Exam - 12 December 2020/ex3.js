function solve(input) {
    let users = {};

    let command = input.shift();
    while (command !== 'Statistics') {
        let [cmd, firstArg, secondArg] = command.split('->');

        if (cmd === 'Add') {
            let username = firstArg;

            if (users[username] === undefined) {
                users[username] = [];
            } else {
                console.log(`${username} is already registered`);
            }

        } else if (cmd === 'Send') {
            let username = firstArg;
            let mail = secondArg;

            users[username].push(mail);

        } else if (cmd === 'Delete') {
            let username = firstArg;

            if (users[username] === undefined) {
                console.log(`${username} not found!`);
            } else {
                delete users[username];
            }
        }

        command = input.shift();
    }

    let sorted = Object.entries(users).sort((a, b) =>
        b[1].length - a[1].length || a[0].localeCompare(b[0])
    );

    console.log(`Users count: ${Object.keys(users).length}`);
    for (let kvp of sorted) {
        console.log(kvp[0]);
        for (let line of kvp[1]) {
            console.log(` - ${line}`);
        }
    }
}

// solve([
//     'Add->Mike',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Some random test mail',
//     'Send->Mike->Hello, do you want to meet up tomorrow?',
//     'Send->George->It would be a pleasure',
//     'Send->Mike->Another random test mail',
//     'Statistics'
// ]);

// solve([
//     'Add->Mike',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Your loan is overdue',
//     'Add->Mike',
//     'Send->Mike->Hello, do you want to meet up tomorrow?',
//     'Delete->Peter',
//     "Send->George->I'm busy",
//     'Send->Mike->Another random test mail',
//     'Delete->George',
//     'Statistics'
//   ])

solve([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
  ]);