const userModel = require('../../config/database')

module.exports.saveUser = (body, cb) => {
    let newUser = new userModel({
        user: body.user,
        pass: body.pass, 
        username: body.username,
        type: body.type
    })
    newUser.save((err, data) => {
        if (err) cb(err);
        console.log(data)
        cb(null, "Usuário cadastrado com sucesso.")
    })

}