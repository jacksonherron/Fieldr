console.log('Meet me at the park! ⚾️');
// Constant Variables
const USERS_API = `http://localhost:3000/api/v1/users`;
const POSTS_API = `http://localhost:3000/api/v1/posts`;
const userWall = document.getElementById('wall');
// API Arrays
const users = [];
const posts = [];


// API Calls
fetch(POSTS_API, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

})
    .then(res => res.json())
    .then(data => {
        data.data.forEach(post => {
            posts.push(post);
        });
        printWall(posts[1]);
    });


fetch(USERS_API, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },

})
    .then(res => res.json())
    .then(data => {
        data.data.forEach(user => {
            users.push(user)
        });
    })








