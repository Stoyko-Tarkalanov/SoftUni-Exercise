import { html } from '../../node_modules/lit-html/lit-html.js';
import { getListingById, deleteListing } from '../api/data.js';

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${data.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}</p>

        ${isOwner 
        ? html` <div class="listings-buttons">
                    <a href="/edit/${data._id}" class="button-list">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
                </div>` 
        : ''}
       
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const data = await getListingById(id);
    const isOwner = ctx.user && data._ownerId == ctx.user._id;

    ctx.render(detailsTemplate(data, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if(confirmed) {
            await deleteListing(id);
            ctx.page.redirect('/all-listings');
        }
    }
}