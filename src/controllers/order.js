const orderModel = require("../models/order");
const productModel = require("../models/product");

module.exports = {
  // fungsi ini akan membuat semua folder menjadi terpecah menjadi beberapa halaman/page
  pageOrder: (req, res) => {
    const { page } = req.query;
    const data = {
      page
    };
    orderModel.pageOrder(data).then(result => {
      res.json(result);
    });
  },
  // fungsi yang akan di eksekusi oleh get
  getOrder: (req, res) => {
    orderModel
      .getOrder()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  // fungsi yang akan di eksekusi oleh get
  orderDetail: (req, res) => {
    const id_order = req.params.id_order;
    console.log(id_order);
    orderModel
      .orderDetail(id_order)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  // sortOrder: (req, res) =>{
  //     orderModel.sortOrder()
  //     .then((result) => {
  //         res.json(result);
  //     })
  //     .catch(err => console.log(err));
  // },

  // fungsi yang akan di eksekusi oleh post order
  insertOrder: (req, res) => {
    const { product_id, qty, total, invoices, dates, users, year } = req.body;
    const data = {
      product_id,
      qty,
      total,
      invoices,
      dates,
      users,
      year
    };
    console.log(product_id);
    // orderModel.insertOrder(data)
    //     .then((result) => {
    //         res.json(result);
    //     })
    //     .catch(err => console.log(err));
    // },

    /*
    idProduct //ariable baru di  KODINGAN 
    req.body // INI FUNGSI EXPRES UNTUK AMBIL DATA
    product_id // INI KEY DARI POSTMAN
    */

    // ========= ====== SAMPE SINI GAK ADA HUBUGANNYA DATABASE ==================//
    let stok = 0;

    productModel.productDetail(product_id).then(result => {
      stok = result[0].stock; // mengambil value pada kolom stock
      // kondisi stock dan kuantiti
      if (stok > qty && stok > 0) {
        orderModel
          .insertOrder(data)
          .then(result => {
            res.json(result);
          })
          .catch(err => console.log(err));
      } else {
        const result2 = { message: "stok kurang" };
        res.json(result2);
      }
    });

    // melempar 2 variaabe kedalam file model untuk di eksekusi dengan query insert kedalam table tbl_order
  },
  history: (req, res) => {
    orderModel
      .history()
      .then(result => {
        miscHelper.response(res, result, 200);
      })
      .catch(err => console.log(err));
  },
  todayIncome: (req, res) => {
    console.log("masuk controller");
    orderModel
      .todayIncome()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  yearIncome: (req, res) => {
    console.log("masuk controller");
    orderModel
      .yearIncome()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  allOrder: (req, res) => {
    console.log("masuk controller");
    orderModel
      .allOrder()
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  }
};
