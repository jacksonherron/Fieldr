// Express
const express = require('express');
const app = express();
const session = require('express-session');
// Database
const db = require('./models');
// Routes
const routes = require('./routes')
// Constants
const PORT = process.env.PORT || 3000;


// ------------------------------ MIDDLEWARE ------------------------------ //
// Hook up EJS
app.set('view engine', 'ejs');

// Public folder 
app.use(express.static(`${__dirname}/public`));

// Express Session
app.use(session({
    secret: 'This secret can be anything you want. It is the encryption of the session object',
    resave: false,
    saveUninitialized: false,
}));

app.use((req, res, next) => {
    console.log(req.session);
    next();
});


// ------------------------------ ROUTES ------------------------------ //
// ------------------------------ HTML ENDPOINTS ------------------------------ //
app.get('/', (req, res) => {
    res.render('index');
})

// app.use('/home', routes.home);
// app.use('/profile'. routes.profile);
app.use('/login', routes.login);
app.use('/signup', routes.signup);



// ------------------------------ API ENDPOINTS ------------------------------ //
// app.get('/api/v1/users', (req, res) => {
//     db.User.find({}, (err, allUsers) => {
//         if (err) return res.json({ status: 400, error: err });
//         res.json({ status: 200, data: allUsers })
//     });
// });

// app.get('/api/v1/posts', (req, res) => {
//     db.Post.find({}, (err, allPosts) => {
//         if (err) return res.json({ status: 400, error: err });
//         res.json({ status: 200, data: allPosts })
//     });
// });

// app.get('/api/v1/comments', (req, res) => {
//     db.Comment.find({}, (err, allComments) => {
//         if (err) return res.json({ status: 400, error: err });
//         res.json({ status: 200, data: allComments })
//     });
// });




app.listen(PORT, () => console.log(`Server is live`));