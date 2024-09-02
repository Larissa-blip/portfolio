let posts = [];
let comments = [];

document.getElementById('createPostBtn').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;

    if (title && content) {
        const post = { title, content, category };
        posts.push(post);
        displayPosts(posts);
    }
});

function displayPosts(postsToDisplay) {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';

    postsToDisplay.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Categoria: ${post.category}</small>
        `;
        postsList.appendChild(postDiv);
    });
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm));
    displayPosts(filteredPosts);
});

document.getElementById('addCommentBtn').addEventListener('click', () => {
    const commentContent = document.getElementById('commentContent').value;

    if (commentContent) {
        comments.push(commentContent);
        displayComments();
    }
});

function displayComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.innerText = comment;
        commentsList.appendChild(commentDiv);
    });
}
