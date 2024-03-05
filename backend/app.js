const express = require("express")

// const { connection } = require("./config/db")
const { userRoute } = require("./routes/userRoute")
const { productRoute } = require("./routes/productRoute")


const app = express()

const cors = require("cors")

app.use(cors());
app.use(express.json())

app.use("/users", userRoute);
app.use("/products", productRoute);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Another Story");
});

module.exports = app;