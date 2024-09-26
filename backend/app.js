const express = require("express")

// const { connection } = require("./config/db")
const { userRoute } = require("./routes/userRoute")
const { productRoute } = require("./routes/productRoute")


const app = express()
const cors = require("cors")
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json())

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    }
    );
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Another Story");
});

module.exports = app;

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");

// // 设置文件上传的存储路径
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'upload/images'); // 文件存储目录
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}-${file.originalname}`); // 保持文件名唯一
//     }
// });

// // 配置 multer 上传中间件
// const upload = multer({ storage: storage });

// const { userRoute } = require("./routes/userRoute");
// const { productRoute } = require("./routes/productRoute");

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// // 设置静态文件访问路径
// app.use('/images', express.static('upload/images'));

// // 文件上传路由
// app.post("/upload", upload.single('product'), (req, res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     });
// });

// app.use("/users", userRoute);
// app.use("/products", productRoute);

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to Another Story");
// });

// module.exports = app;
