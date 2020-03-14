require('dotenv').config()

const connecttion = require('../configs/db');

module.exports={
    // function untuk menampilkan semua data
    getCategory: () => {
        // mengembalikan data dengan parameter menyelesaikan dan menolak
        return new Promise((resolve, reject) => {
            // masuk kedalam file db lalu membuat query untuk memanggil semua data pada tabel
            connecttion.query("SELECT * FROM categori", (err, result) => {
                // kondisi untuk mengembalikan data
                if(!err){
                    resolve(result);
                }
                // kondisi untuk memberikan peringatan error apabila terjadi kesalahan
                else {
                    reject(new Error(err));
                }
            })
        })
    },
    // function memanggil salah satu data
    // memberikan parameter berupa id data
    categoryDetail: (id_category) => {
        return new Promise((resolve, reject) => {
            connecttion.query("SELECT * FROM categori WHERE id=?", id_category, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    // functin untuk menambahkan data
    // diberikan parameter data
    insertCategory: (data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("INSERT INTO categori SET ?", data, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    updateCategory: (id_category, data) => {
        return new Promise((resolve, reject) => {
            connecttion.query("UPDATE categori SET ? WHERE id = ?",[data, id_category], (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
    deleteCategory: (id_category) => {
        return new Promise((resolve, reject) => {

            connecttion.query(`DELETE FROM categori WHERE id = ${id_category} `, (err, result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },
}