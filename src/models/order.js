require("dotenv").config();

const connecttion = require("../configs/db");

module.exports = {
  pageOrder: data => {
    return new Promise((resolve, reject) => {
      const batas = parseInt(data.page);
      const limit = 3;
      const index = limit * (batas - 1);
      connecttion.query(
        "SELECT * FROM tbl_order LIMIT ? OFFSET ?",
        [limit, index],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getOrder: () => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "select sum(total) as total,users,dates, invoices from tasksatu.tbl_order  group by invoices, users, dates order by dates desc",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  // orderDetail: id_order => {
  //   return new Promise((resolve, reject) => {
  //     connecttion.query(
  //       "SELECT * FROM tbl_order WHERE id=?",
  //       id_order,
  //       (err, result) => {
  //         if (!err) {
  //           resolve(result);
  //         } else {
  //           reject(new Error(err));
  //         }
  //       }
  //     );
  //   });
  // },
  insertOrder: data => {
    console.log(data);
    return new Promise((resolve, reject) => {
      connecttion.query("INSERT INTO tbl_order SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
        connecttion.query(
          "UPDATE product INNER JOIN tbl_order ON product.id=tbl_order.product_id  SET product.stock=product.stock-tbl_order.qty"
        );
      });
    });
  },

  // insertOrder: (idProduct, quant) => {

  // return new Promise((resolve, reject) =>{
  //     let hasil =connecttion.query("SELECT * FROM product WHERE id =?", idProduct)
  //             connecttion.query("UPDATE product SET stock=? WHERE id = ?", [quant, idProduct], (err, result) => {
  //                 if(!err){
  //                    resolve(result);
  //                 }else{
  //                     reject(new Error(err));
  //                 }
  //             })

  //     connecttion.query("INSERT INTO tbl_order SET ?", quant,(err, result) => {
  //         if(!err){
  //             connecttion.query("UPDATE product SET stock(SELECT (product.stock-tbl_order.qty) FROM product INNER JOIN tbl_order on product.id=tbl_order.product_id) WHERE id = ?", idProduct)
  //         }else{
  //             reject(new Error(err));
  //         }
  //     })
  // })
  // },
  sortOrder: () => {
    return new Promise((resolve, reject) => {
      connecttion.query("SELECT * FROM tbl_order", (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  history: () => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "SELECT SUM(total) AS total, invoices from tbl_order GROUP BY invoices",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  todayIncome: () => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "SELECT SUM(total) AS Total FROM `tbl_order` GROUP BY dates LIMIT 1",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  yearIncome: () => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "SELECT SUM(total) AS total, year FROM tbl_order GROUP BY year DESC LIMIT 1",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  allOrder: () => {
    return new Promise((resolve, reject) => {
      connecttion.query(
        "SELECT SUM(qty) AS total_order FROM tbl_order",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
