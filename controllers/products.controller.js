const Product = require("../models/products.model");

exports.getProducts = (req, res) => {
  Product.getAll((err, data) => {
    if (err) res.status(500).send(err);
    res.send(data);
  });
};

exports.getProductById = (req, res) => {
  Product.getById(req.params.id, (err, data) => {
    if (err) res.status(500).send(err);
    res.send(data[0]);
  });
};

exports.createProduct = (req, res) => {
  Product.create(req.body, (err, data) => {
    if (err) res.status(500).send(err);
    res.send({ message: "Product created!", data });
  });
};

exports.updateProduct = (req, res) => {
  Product.update(req.params.id, req.body, (err, data) => {
    if (err) res.status(500).send(err);
    res.send({ message: "Product updated!", data });
  });
};

exports.deleteProduct = (req, res) => {
  Product.delete(req.params.id, (err, data) => {
    if (err) res.status(500).send(err);
    res.send({ message: "Product deleted!", data });
  });
};
