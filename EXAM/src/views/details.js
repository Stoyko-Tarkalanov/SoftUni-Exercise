import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticleById, deleteArticle } from '../api/data.js';

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details-page" class="content details">
    <h1>${data.title}</h1>

    <div class="details-content">
        <strong>Published in category ${data.category}</strong>
        <p>${data.content}</p>

        <div class="buttons">
            ${isOwner 
                 ? html`
                    <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                    <a href="/edit/${data._id}" class="btn edit">Edit</a>
                    <a href="/" class="btn edit">Back</a>` 
                : html`
                    <a href="/" class="btn edit">Back</a>` 
            }
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const articleId = ctx.params.id;
    const data = await getArticleById(articleId);
    const isOwner = ctx.user && ctx.user._id == data._ownerId;

    // console.log(data);
    ctx.render(detailsTemplate(data, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this article ?');
        if(confirmed) {
            await deleteArticle(articleId);
            ctx.page.redirect('/');
        }
    }
}