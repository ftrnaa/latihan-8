const db = require("./db.config");

const Product = {
  getAll: (result) => {
    db.query("SELECT * FROM products", result);
  },

  getById: (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], result);
  },

  create: (data, result) => {
    db.query("INSERT INTO products SET ?", data, result);
  },

  update: (id, data, result) => {
    db.query("UPDATE products SET ? WHERE id = ?", [data, id], result);
  },

  delete: (id, result) => {
    db.query("DELETE FROM products WHERE id = ?", [id], result);
  }
};

module.exports = Product;
