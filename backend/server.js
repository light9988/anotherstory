// import app from "./app.js";
const app = require('./app.js');
const { connection } = require("./config/db")

const PORT = process.env.PORT || 4000


app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to database");
        console.log(`Server is running at port ${PORT}`);
    } catch (error) {
        console.error("Error:", error);
    }
});