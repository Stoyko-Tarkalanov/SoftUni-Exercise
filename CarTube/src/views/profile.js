import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyListings } from '../api/data.js';

const profileTemplate = (data) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        ${data.length == 0 
            ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`
            : data.map(carTemplate)}

    </div>
</section>`;

const carTemplate = (item) => html`
<div class="listing">
    <div class="preview">
        <img src=${item.imageUrl}>
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/edit/${item._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export async function profilePage(ctx) {
    const data = await getMyListings(ctx.user._id);
    ctx.render(profileTemplate(data));
}