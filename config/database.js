const mongoose = require('mongoose');

module.exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

    return mongoose
}