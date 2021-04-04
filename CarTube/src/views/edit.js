import { html } from '../../node_modules/lit-html/lit-html.js';
import { getListingById, updateListing } from '../api/data.js';

const editTemplate = (data, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${data.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${data.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${data.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${data.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${data.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${data.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const car = await getListingById(id);

    ctx.render(editTemplate(car, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const editedCar = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            description: formData.get('description'),
            year: Number(formData.get('year')),
            imageUrl: formData.get('imageUrl'),
            price: Number(formData.get('price')),
        }

        if (isNaN(editedCar.year) || isNaN(editedCar.price)) {
            return alert('Year and Price must be numbers!');
        }

        if (Object.values(editedCar).some(x => !x)) {
            return alert('All fields are required!');
        }

        await updateListing(id, editedCar);
        event.target.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}