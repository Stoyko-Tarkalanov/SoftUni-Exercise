import { e } from './common.js';
import { request } from './common.js';

let main;
let section;

export async function setupPost(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showPost(id) {
    main.innerHTML = '';
    let post = await getPost(id);
    let postElement = e('div', { className: 'topic-title' }, '');
    let postHTML = `<!-- topic-title  -->
    <div class="topic-title">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <h2>${post.topicName}</h2>
                <p>Date: <time>${post.date}</time></p>
            </div>
            <div class="subscribers">
                <p>Subscribers: <span>${post.subscribes}</span></p>
                <!-- <button class="subscribe">Subscribe</button>
                <button class="unsubscribe">Unsubscribe</button> -->
            </div>
        </div>
    </div>`;
    postElement.innerHTML = postHTML;

    // get comments
    let comments = await getComments(id);
    Object.keys(comments).forEach(comment => {
        if (comments[comment].postId == id) {
            let commentHTML = `<div class="comment">
            <header class="header">
                <p><span>${comments[comment].username}</span> posted on <time>${comments[comment].date}</time></p>
            </header>
            <div class="comment-main">
                <div class="userdetails">
                    <img src="./static/profile.png" alt="avatar">
                </div>
                <div class="post-content">
                    <p>${comments[comment].postText}</p>
                </div>
            </div>
            <div class="footer">
                <p><span>0</span> likes</p>
            </div>
        </div>`;
            postElement.innerHTML += commentHTML;
        }
    });

    postElement.innerHTML += commentForm(id);
    main.appendChild(postElement);
}

// get post from database

async function getPost(id) {
    // const token = sessionStorage.getItem('userToken');
    const result = await request('http://localhost:3030/jsonstore/collections/myboard/posts/' + id, {
        method: 'get',
    });
    // console.log(result);
    return result;
}

function commentForm(postId) {
    let formHTML = `<div class="answer-comment">
    <p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
                <input type="hidden" name="postId" id="postId" value="${postId}">
            </div>
            <button>Post</button>
        </form>
    </div>
</div>`;
    return formHTML;

}

async function getComments(postId) {
    // const token = sessionStorage.getItem('userToken');
    const result = await request('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'get',
    });
    // console.log(result);
    return result;
}

export async function addComment(postData) {
    // const token = sessionStorage.getItem('userToken');
    const result = await request('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    // console.log(result);
    return result;
}