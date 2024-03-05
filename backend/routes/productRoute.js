// Routes/product.route.js

const express = require('express');
const { Router } = require("express");
const product = require('../controller/product');

const productRoute = Router();

// Define product routes
productRoute.post('/product', product.addProduct);
productRoute.delete('/product/:id', product.deleteProduct);
productRoute.get('/product', product.getAllProducts);

module.exports = { productRoute };
