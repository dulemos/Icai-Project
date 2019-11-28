const jwt = require('jsonwebtoken');
const userModel = require('../../config/database');
const sql = require('mssql');
const config = {
    user: ,
    password: ,
    server: ,
    database: ,
    encrypt: 
}


let authUser = (id, cb) => {
    cb(jwt.sign({ id }, process.env.SECRET));
}

const user = userModel;

module.exports.userLogin = function (email, pass, cb){
    user.findOne({'user': email}, (err, userData)=>{
        if(err) cb(null);
        userData = userData.toJSON()
        if(pass === userData.pass && pass){
            authUser(userData._id, (token)=>{
                cb(token)
            })
        }else{
            cb(null);
        }
    })
}

module.exports.authorizeUser = (email, pass, cb) => {
    const pool = new sql.ConnectionPool(config);
    pool.connect()
        .then(() => {
            let req = new sql.Request(pool);
            req.query('SELECT 1 AS NUMBER', (err, result) => {
                console.log(result);
                cb(result)
            })
        }).catch(err => {
            console.log(err);
            cb(null);
        })
}