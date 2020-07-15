require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    getUser: () => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT person.username, location.ltitude, location.longitude FROM `person` INNER JOIN location ON person.id=location.id_user", (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    loginUser: (name, password) =>{
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM users WHERE name=? AND password = ?", [name, password], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    insertUser:(data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("INSERT INTO users SET ?", data, (err, result) =>{
                if (!err) {
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    
}
