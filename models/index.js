const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/fieldr';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log(`MongoDB is connected at port: ${DB_URL}`))
    .catch((err) => console.log(err));

module.exports = {
    User: require('./User'),
    Post: require('./Post'),
    Comment: require('./Comment'),
}