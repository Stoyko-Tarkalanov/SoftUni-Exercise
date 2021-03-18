import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit, emailCheck, passwordCheck) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${'form-control' + (emailCheck ? ' is-invalid' : '' )} id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${'form-control' + (passwordCheck ? ' is-invalid' : '' )} id="password" type="password"
                            name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        const emailCheck = formData.get('email') == '';
        const passwordCheck = formData.get('password') == '';

        const data = [...formData.entries()].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});

        if (Object.entries(data).some(([k, v]) => v == '')) {
            ctx.render(loginTemplate(onSubmit, emailCheck, passwordCheck));
            return alert('All fiels are required!');
        }

        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}

