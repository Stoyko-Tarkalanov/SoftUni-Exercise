import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logoutFunc);
setUserNav();

page('/', decorateContent, guestUsersOnly, homePage);
page('/login', decorateContent, loginPage);
page('/register', decorateContent, registerPage);
page('/catalog', decorateContent, catalogPage);
page('/create', decorateContent, createPage);
page('/details/:id', decorateContent, detailsPage);
page('/edit/:id', decorateContent, editPage);
page('/profile', decorateContent, profilePage);

page.start();

function guestUsersOnly(ctx, next) {
    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        return ctx.page.redirect('/catalog');
    }
    next();
}

function decorateContent(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}

async function logoutFunc() {
    await logout();
    setUserNav();
    page.redirect('/');
}