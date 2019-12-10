const userModel = require('../../config/database');


const user = userModel;
    
module.exports.findUser = function (id, cb){
    user.findById(id, (err, res) => {
        cb(res)
    })
}
