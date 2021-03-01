async function getInfo() {
    const input = document.getElementById('stopId');
    const id = input.value;

    const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;

    try {
        const ulElement = document.getElementById('buses');
        ulElement.innerHTML = '';

        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        // console.log(data);

        const currentStop = document.getElementById('stopName');
        currentStop.textContent = data.name;
        
        console.log(Object.entries(data));
        
        Object.entries(data.buses).map(([bus, arrive]) => {
            const output = document.createElement('li');
            output.textContent = `Bus ${bus} arrives in ${arrive} minutes`;

            ulElement.appendChild(output);
        });

        input.value = '';
    } catch (error) {
        const currentStop = document.getElementById('stopName');
        currentStop.textContent = 'Error';
    }
}