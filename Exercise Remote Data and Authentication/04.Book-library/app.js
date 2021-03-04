async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(createRow).join('');
    document.querySelector('tbody').innerHTML = rows;

    function createRow([id, book]) {
        const result = `
        <tr data-id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>`;
        return result;
    }
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = { title: formData.get('title'), author: formData.get('author') };

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'applications/json' },
        body: JSON.stringify(book)
    });

    event.target.reset();
    getAllBooks();
}

async function updateBook(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const id = formData.get('id');
    const book = { title: formData.get('title'), author: formData.get('author') };

    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'applications/json' },
        body: JSON.stringify(book)
    });
}

async function deleteBook(id) {
    await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete'
    });
    getAllBooks();
}

(function begin() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createForm').addEventListener('click', createBook);

    document.getElementById('editForm').addEventListener('submit', updateBook);
    // console.log(document.querySelector('#editForm button'));
    document.querySelector('#editForm button').addEventListener('click', (e) => {
        document.getElementById('createForm').style.display = 'block';
        document.getElementById('editForm').style.display = 'none';
        e.target.reset();
    });

    document.querySelector('table').addEventListener('click', handleClick);
})();

function handleClick(e) {
    if (e.target.className == 'editBtn') {
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';
        const bookId = e.target.parentNode.parentNode.dataset.id;
        bookEditing(bookId);
    } else if (e.target.className == 'deleteBtn') {
        const confirmed = confirm('Are you sure you want to delete this book');
        if (confirmed) {
            const bookId = e.target.parentNode.parentNode.dataset.id;
            deleteBook(bookId);
        }
    }
}

async function bookEditing(id) {
    const book = await request(`http://localhost:3030/jsonstore/collections/books/${id}`)
    document.querySelector('#editForm [name ="id"]').value = id;
    document.querySelector('#editForm [name ="title"]').value = book.title;
    document.querySelector('#editForm [name ="author"]').value = book.author;
}