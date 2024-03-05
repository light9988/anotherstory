// Controllers/product.js

const Product = require("../models/product");

const addProduct = async (req, res) => {
    try {
        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let lastProduct = products[products.length - 1];
            id = lastProduct.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            old_price: req.body.old_price,
            new_price: req.body.new_price,
            available: req.body.available
        });

        await product.save();

    //     res.json({
    //         success: true,
    //         name: req.body.name
    //     });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
        // }
        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

// const deleteProduct = async (req, res) => {
//     try {
//         await Product.findOneAndDelete({ id: req.body.id });
//         res.json({
//             success: true,
//             name: req.body.name
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        let data = await Product.findOneAndUpdate(
            { userId, _id: id },
            { ...req.body }
        );
        res.status(201).send("Updated");
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        await Product.findOneAndDelete({ userId, _id: id });
        res.status(201).send("deleted");
    } catch (error) {
        res.send(error);
    }
};


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addProduct, deleteProduct, getAllProducts };
