console.log('Meet me at the park! ⚾️');
// Global Constants
const COMMENTS_API = `/`;
const userWall = document.getElementById('wall');
const newPostForm = document.getElementById('new-post-form');
const main = document.querySelector('main');

// State variables
const comments = [];
const commentForm = document.getElementsByClassName('comment-form');

// Fetch functions
const postComment = (postId, data) => {
    // API Calls
    fetch(`/home/${postId}`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            window.location.reload();
        })
        .catch((err) => console.log(err));

}

const deletePost = data => {
    fetch(`/home/${data.postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': `application/json`
        },
    })
        .then(() => {
            console.log(`Deleting ${data.postId}`)
            window.location.reload();
        })
}

const joinPost = data => {
    fetch(`/home/${data.postId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': `application/json`
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            console.log(`You joined a group!`)
            window.location.reload();
        })
}


// Event Listeners
main.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON' && event.target.className === "comment-button") {
        event.preventDefault();
        console.log(event.target.parentNode.parentNode.childNodes[1].value);
        console.log(event.target.id);
        data = {
            content: event.target.parentNode.parentNode.childNodes[1].value,
            post_id: event.target.id
        };
        postComment(data.post_id, data);
    }
    if (event.target.className === 'delete-button') {
        event.preventDefault();
        data = {
            postId: event.target.parentNode.parentNode.parentNode.id
        }
        deletePost(data);
    }
    if (event.target.className === "join-button") {
        event.preventDefault();
        data = {
            postId: event.target.parentNode.parentNode.parentNode.id
        }
        joinPost(data);
    }
}, false);








