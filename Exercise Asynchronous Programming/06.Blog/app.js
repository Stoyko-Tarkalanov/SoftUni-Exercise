const viewBtn = document.getElementById('btnViewPost');

function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPost);
    viewBtn.addEventListener('click', displayPost);
    viewBtn.disabled = true;
}

attachEvents();

async function getPost() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const response = await fetch(url);
    const data = await response.json();

    const select = document.getElementById('posts');
    select.innerHTML = '';

    Object.values(data).map(createOption).forEach(curr => select.appendChild(curr));
    viewBtn.disabled = false;
}

function createOption(post) {
    const output = document.createElement('option');
    output.textContent = post.title;
    output.value = post.id;

    return output;
}

function displayPost() {
    const postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);
}

async function getCommentsByPostId(postId) {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postUrl = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;

    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const commentsData = await commentsResponse.json();
    const comments = Object.values(commentsData).filter(curr => curr.postId == postId);

    comments.map(createComment).forEach(curr => commentsUl.appendChild(curr));
}

function createComment(comment) {
    const output = document.createElement('li');
    output.textContent = comment.text;
    output.id = comment.id;

    return output;
}

