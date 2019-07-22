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
    res.sendFile(`${__dirname}/views/index.html`);
})
<<<<<<< HEAD
// app.use('/home', routes.home);
// app.use('/profile'. routes.profile);
// app.use('/login', routes.login);
// app.use('/signup', routes.signup);
=======

// app.use('/home', routes.home);
// app.use('/profile'. routes.profile);
// app.use('/login', routes.login);
app.use('/signup', routes.signup);
>>>>>>> 4cdf0430701cb639baf3e343892afc0185403833

// ------------------------------ API ENDPOINTS ------------------------------ //
app.get('/api/v1/users', (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return res.json({ status: 400, error: err });
        res.json({ status: 200, data: allUsers })
    });
});


app.listen(PORT, () => console.log(`Server is live`));