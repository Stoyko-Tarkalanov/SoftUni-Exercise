function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const author = document.getElementById('author').value;
        const content = document.getElementById('content').value;

        await sendMessage({ author, content });

        document.getElementById('author').value = '';
        document.getElementById('content').value = '';

        getMessage();
    });

    document.getElementById('refresh').addEventListener('click', getMessage);

    getMessage();
}

attachEvents();

async function getMessage() {
    const response = await fetch('http://localhost:3030/jsonstore/messenger');
    const data = await response.json();

    const message = Object.entries(data).map(x => `${x[1].author}: ${x[1].content}`).join('\n');
    document.getElementById('messages').value = message;
}

async function sendMessage(message) {
    const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: { 'Content-Type': 'applicatin/json' },
        body: JSON.stringify(message)
    });
}