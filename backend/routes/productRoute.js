// Routes/product.route.js

const express = require('express');
const { Router } = require("express");
const product = require('../controller/product');
const multer = require('multer');
const path = require('path');

const productRoute = Router();

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Define product routes
productRoute.post('/product', product.addProduct);
productRoute.delete('/product/:id', product.deleteProduct);
productRoute.get('/product', product.getAllProducts);

module.exports = { productRoute };
