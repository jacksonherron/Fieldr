console.log('Meet me at the park! ⚾️');
// Global Constants
const COMMENTS_API = `/`;
const userWall = document.getElementById('wall');
const newPostForm = document.getElementById('new-post-form');
const main = document.querySelector('main');

// State variables
const comments = [];
const commentForm = document.getElementsByClassName('comment-form');


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
        console.log(data);
        postComment(data.post_id, data);
    }
}, false);








