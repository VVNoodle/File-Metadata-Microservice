const express = require("express");
const multer = require("multer");
const path = require("path");
var upload = multer({ dest: 'uploads/' });

const app = express();

const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv/config");

app.use(express.static('./public'));

app.post("/upload", upload.single('image'), (req, res) => {
    return res.json(req.file);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
});
