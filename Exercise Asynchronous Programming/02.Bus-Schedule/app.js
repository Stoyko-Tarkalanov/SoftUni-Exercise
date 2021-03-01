function solve() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const inputElement = document.querySelector('#info span');

    let info = {
        next: 'depot',
    }

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/` + info.next;
        const response = await fetch(url);
        const data = await response.json();
        console.log(info);

        info = data;

        inputElement.textContent = `Next stop ${info.name}`;

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    function arrive() {
        inputElement.textContent = `Arraiving at ${info.name}`;
        console.log(info);

        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();