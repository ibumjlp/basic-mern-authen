const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to Database Successfully')
})

const router = require("./routes/userRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});