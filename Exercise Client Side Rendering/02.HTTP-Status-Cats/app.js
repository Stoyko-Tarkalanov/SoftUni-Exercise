import { html, render } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';
import { cats } from './catSeeder.js';

const currentTemplate = (data) => html`
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${data.info ? 'Hide' : 'Show'} status code</button>
        <div class="status" style=${styleMap(data.info ? {} : {display: 'none'})} id=${data.id}>
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
    </div>
</li>`;

const main = document.getElementById('allCats');
cats.forEach(x => x.info = false);
update();

function update() {
const catsList = html`
<ul @click=${toggleContent}>
    ${cats.map(currentTemplate)}
</ul>
`;

render(catsList, main);
}

function toggleContent(event) {
    const elementId = event.target.parentNode.querySelector('.status').id;
    const currentCat = cats.find(x => x.id == elementId);
    currentCat.info = !currentCat.info;
    update();
}