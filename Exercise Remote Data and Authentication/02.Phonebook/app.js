function attachEvents() {
    document.getElementById("btnCreate").addEventListener("click", createData);
    document.getElementById("btnLoad").addEventListener("click", refreshData);
    document.getElementById('phonebook').addEventListener('click', deleteData)
}
attachEvents();

async function createData() {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    if (person.value == '' || phone.value == '') {
        return alert('All fields are required');
    }

    let info = { person: person.value, phone: phone.value };

    await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'applicatin/json' },
        body: JSON.stringify(info)
    });

    person.value = '';
    phone.value = '';
}

async function refreshData() {
    const pBook = document.getElementById('phonebook');
    pBook.textContent = '';

    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();

    Object.entries(data).forEach(x => {
        const liElement = document.createElement('li');
        liElement.textContent = `${x[1].person}: ${x[1].phone}`;
        liElement.id = x[1]._id;
        const dellBtn = document.createElement('button');
        dellBtn.textContent = 'Delete';
        liElement.appendChild(dellBtn);
        pBook.appendChild(liElement);
    });
}

async function deleteData(e) {
    if (e.target.textContent == 'Delete') {
        const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${e.target.parentElement.id}`, {
            method: 'delete'
        });
    }
    refreshData();
}