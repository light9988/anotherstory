// Controllers/user.js

const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignup = async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({
                success: false,
                errors: "Email already exists"
            });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            cartData: cart
        });

        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, "secrete_ecom");
        res.json({
            success: true,
            token
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                success: false,
                errors: "User not found"
            });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                errors: "Invalid password"
            });
        }

        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, "secrete_ecom");
        res.json({
            success: true,
            token
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { userSignup, userLogin };
