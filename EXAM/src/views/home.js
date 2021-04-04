import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecentArticles } from '../api/data.js';

const homeTemplate = (data) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>

    ${data.some(x => x.category)
       ? data.map(itemTemplate)
       : data.map(emptyTemplate)
       }

</section>`;

const itemTemplate = (item) => html`
<section class="recent">
    <h2>${item.category}</h2>
    <article>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <a href="/details/${item._id}" class="btn details-btn">Details</a>
    </article>
</section>`;

const emptyTemplate = (item) => html`
<section class="recent">
    <h2>${item.category}</h2>
    <h3 class="no-articles">No articles yet</h3>
</section>`;

export async function homePage(ctx) {
    const data = await getRecentArticles();
    const info = data.some(x => x.category);
    console.log(info);

    // console.log(data);
    ctx.render(homeTemplate(data));
}

