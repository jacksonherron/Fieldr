console.log('Meet me at the park! ⚾️');
// Global Constants
const POSTS_API = `/home/future`;

const userWall = document.getElementById('wall');

const newPostForm = document.getElementById('new-post-form')

// State variables
const posts = [];

// // Functions
// const renderPosts = () => {
//     posts.forEach(post => {
//         const card = postCard(post);
//         userWall.insertAdjacentHTML('afterbegin', card);
//     });
// };

// const postCard = (post) => {
//     const base =`
//         <div class="wall">
//             <div class="card">
//                 <div class="sport">
//                     ${post.sport}
//                 </div>
    
//                 <div class="descr">
//                     <h1>${post.host.firstName} ${post.host.lastName}</h1>
//                     ${post.descr}
//                 </div>
//             </div>
//             <div class="comment-field">
//                 <form>
//                     <div class="inputs">
//                         <input type="text" />
//                         <input type="submit">
//                     </div>
//                 </form>
//             </div>
//             <h1>Comments:</h1>
//             `
//     let comments = ``;
//     for(let j = 0; j < post.comments.length; j++) {
//         comments += `
//                 <div class="comment" id="${post.comments[j]._id}">
//                     <h4 class="comments-user">${post.comments[j].user.firstName} ${post.comments[j].user.lastName}</h4>
//                     <p> ${post.comments[j].content}</p>
//                 </div>
//             </div>
//         `
//     }
//     return base + comments;
// }




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
        console.log('Fetched...')
        renderPosts();
    });







