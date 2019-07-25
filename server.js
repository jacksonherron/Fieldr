// ------------------------------ IMPORT CORE MODULES ------------------------------ //
// Express
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
// Database
const db = require('./models');
// Routes
const routes = require('./routes')

// ------------------------------ GLOBAL VARIABLES ------------------------------ //
// Constants
const PORT = process.env.PORT || 3000;

// ------------------------------ MIDDLEWARE ------------------------------ //
// Set EJS as view engine
app.set('view engine', 'ejs');
// Make public folder avaialable
app.use(express.static(`${__dirname}/public`));
// Express Session
app.use(session({
    secret: 'This secret can be anything you want. It is the encryption of the session object',
    resave: false,
    saveUninitialized: false,
}));
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

// ------------------------------ ROUTES ------------------------------ //

// ------------------------------ HTML ENDPOINTS ------------------------------ //

// Index page
app.get('/', (req, res) => {
    res.render('index');
})
// Login and logout routes
app.use('/', routes.root);
// Home page routes
app.use('/home', routes.home);
// Profile routes
app.use('/profile', routes.profile);

// ------------------------------ API ENDPOINTS ------------------------------ //
// USERS
app.get('/api/v1/users', (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return res.json({ status: 400, error: err });
        res.json({ status: 200, data: allUsers })
    });
});
// POSTS
app.get('/api/v1/posts', (req, res) => {
    db.Post.find({}, (err, allPosts) => {
        if (err) return res.json({ status: 400, error: err });
        res.json({ status: 200, data: allPosts })
    })
});
// Comments
app.get('/api/v1/comments', (req, res) => {
    db.Comment.find({}, (err, allComments) => {
        if (err) return res.json({ status: 400, error: err });
        res.json({ status: 200, data: allComments })
    })
});

// ------------------------------ INITIALIZE SERVER------------------------------ //
app.listen(PORT, () => console.log(`Server is live`));