const userModel = require('../../config/database');

module.exports.saveUser = (body, cb) => {
    let newUser = {
        'user': body.email,
        'pass': body.pass,
        'username': body.username,
        'type': body.type
    }

    userModel.create(newUser, (err, data) => {
        if (err) cb(err);
        console.log(data);
        cb(null, "acho que deu certo.")
    })

}