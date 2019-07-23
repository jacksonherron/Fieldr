console.log('Meet me at the park! ⚾️');
// Constant Variables
const USERS_API = `http://localhost:3000/api/v1/users`;
const POSTS_API = `http://localhost:3000/api/v1/posts`;
const users = [];
const posts = [];


fetch(POSTS_API, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },

})
    .then(res => res.json())
    .then(data => {
        data.data.forEach(post => {
            posts.push(post)
        });
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

console.log(posts);
console.log(users);


const cardTemplate = `
<div class="wall">       
    <div class="card">
            <div class="sport">
                Baseball
            </div>

            <div class="descr">
                <h1>User</h1>
                Join us for this sport at the park
            </div>
        </div>

        <div class="comment-field">
            <form>
                <div class="inputs">
                    <input type="text"/>
                     <input type="submit">
                </div>
            </form?
        </div>
</div>
`

const userWall = document.getElementById('wall');

userWall.insertAdjacentHTML('afterbegin', cardTemplate);

