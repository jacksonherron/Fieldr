console.log('Meet me at the park! ⚾️');
// Constant Variables
const USERS_API = `http://localhost:3000/api/v1/users`;
const POSTS_API = `http://localhost:3000/api/v1/posts`;
const userWall = document.getElementById('wall');
// API Arrays
const users = [];
const posts = [];

// Functions
const printWall = post => {
    const cardTemplate = `
    <div class="wall">       
        <div class="card">
                <div class="sport">
                    ${post.sport}
                </div>
    
                <div class="descr">
                    <h1>${post.hostedBy}</h1>
                    ${post.descr}
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
    userWall.insertAdjacentHTML('afterbegin', cardTemplate);
}

// API Calls
fetch(POSTS_API, {
    method: 'GET',
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








