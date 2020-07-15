const express = require('express');
const app = express();
const multer = require('multer');
const auth = require('../helper/auth') 

const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, './upload')
},
filename: function(req, file, cb){
    cb(null, file.originalname)
}
})
const upload = multer({storage})

const Router = express.Router();
const productController = require('../controllers/product');

Router
.get('/page', auth.verify, productController.pageProduct)
.get('/', productController.getProduct)

.get('/sort/:param', productController.sortProduct)
.get('/:id_product',  productController.productDetail)
.post('/', upload.single('image'), productController.insertProduct)

// URL/LINK POST UNTUK UPDATE STOK
.post('/updatestok', productController.updateStok) //link untuk update = http://localhost:8080/api/v1/product/updatestok
// DIatas ini kita panggil fungsi ke controller product dengan nama controllernya updateStok

.patch('/:id_product',upload.single('image'), productController.updateProduct)
.delete('/:id_product', productController.deleteProduct)
.get('/search/:search', productController.searchProduct)
.get('/filter/:filter', productController.filterProduct)
// .post('/login', productController.loginUser)

module.exports = Router;


