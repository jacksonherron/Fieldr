console.log('Meet me at the park! ⚾️');

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

