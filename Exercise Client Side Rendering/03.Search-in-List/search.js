import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const searchTemplate = (towns, match) => html`
   <article>
      <div id="towns">
         <ul>
            ${towns.map(x => itemTemplate(x, match))}
         </ul>
      </div>
      <input type="text" id="searchText" .value=${match} />
      <button @click=${search}>Search</button>
      <div id="result">${towns.filter(x => match && x.toLowerCase().includes(match.toLowerCase())).length + ' matches found'}</div>
   </article>`;

const itemTemplate = (name, match) => html`
   <li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : '' }>${name}</li>`;

const main = document.body;
update();

function update(match = '') {
   const result = searchTemplate(towns, match);
   render(result, main);
}

function search(event) {
   const match = event.target.parentNode.querySelector('input').value;
   update(match);
}
