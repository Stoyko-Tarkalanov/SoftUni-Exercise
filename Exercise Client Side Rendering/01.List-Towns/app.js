import { html, render } from './node_modules/lit-html/lit-html.js';

const currentTemplate = (data) => html`
<ul>
    ${data.map(x => html`<li>${x}</li>`)}
</ul>`;

document.getElementById('btnLoadTowns').addEventListener('click', updateData);

function updateData(event) {
    event.preventDefault();

    const input = document.getElementById('towns').value;
    const divElement = document.getElementById('root');

    const currentDataTowns = input.split(', ').map(x => x.trim());
    // console.log(currentDataTowns);

    const result = currentTemplate(currentDataTowns);
    render(result, divElement);
}