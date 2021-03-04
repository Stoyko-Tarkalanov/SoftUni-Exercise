(async function () {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();

    const rows = Object.entries(data).map(createData).join('');
    appendData(rows);

    document.querySelectorAll('form input')[4].addEventListener('click', creatingStudentsForm);

})()

function createData(x) {
    const output = `<tbody>
    <td>${x[1].firstName}</td>
    <td>${x[1].lastName}</td>
    <td>${x[1].facultyNumber}</td>
    <td>${x[1].grade}</td>
    </tbody>`;

    return output;
}

async function creatingStudentsForm(e) {
    e.preventDefault()
    const fName = document.getElementById('fname').value;
    const lName = document.getElementById('lname').value;
    const fNum = document.getElementById('fnumber').value;
    const grade = document.getElementById('grade').value;

    console.log(fName);
    const output = `<tbody>
    <td>${fName}</td>
    <td>${lName}</td>
    <td>${fNum}</td>
    <td>${grade}</td>
    </tbody>`;

    document.getElementById('results').lastElementChild.innerHTML += output;
}

function appendData(x) {
    document.getElementById('results').lastElementChild.innerHTML = x;
}