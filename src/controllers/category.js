const categoryModel = require('../models/category')
const miscHelper = require('../helper/helper')


module.exports = {
    // menampilkan semua data yang ada pala category
    getCategory: (req, res) =>{
        // memanggil function getCategory() didalam file category
        categoryModel.getCategory()
        // memberikan response apabila sukses
        .then((result) => {
            miscHelper.response(res, result, 200)
        })
        // memberikan tanda error apabila error
        .catch(err => console.log(err));
    },
    // menampilkan salah satu data yang ada pada kategory secara detail
    categoryDetail: (req, res) =>{
        const id_category = req.params.id_category;
        categoryModel.categoryDetail(id_category)
        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err));
    },

    // insert data kedalam tabel category
    insertCategory: (req, res) =>{
        console.log(req.body)
        // memasukan kolom pada tabel category kedalam req.body
        const  {name, id} = req.body;
        // memasukan kolom kedalam constanta
        const data = {
            name,
            id
        }
        // console.log(req.body.id)
        // console.log(req.body.name)
        // memanggil function
        categoryModel.insertCategory(data)
        // memberikan response
        .then((result) => {
            res.json(result);
        })
        // memberikan response error
        .catch(err => console.log(err));
    },
    updateCategory: (req, res) =>{
        // memanggil id dengan params
        const id_category = req.params.id_category;
        // memasukan kolom kedalam req.body
        const  {name, id} = req.body;
        const data = {
            id,
            name,
        }
        // memanggil function dengan parameter id dan kolom pada tabel category
        categoryModel.updateCategory(id_category, data)
        // memberikan response
        .then((result) => {
            res.json(result);
        })
        // memberikan response error
        .catch(err => console.log(err));
    },


    // delete data
    // dengan parameter request dan response
    deleteCategory: (req, res) =>{
        const id_category = req.params.id_category;
        categoryModel.deleteCategory(id_category)
        .then((result) => {
            res.json(result);
        })
        .catch(err => console.log(err));
    },
}