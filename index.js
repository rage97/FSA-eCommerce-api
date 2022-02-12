const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter')

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/productDB')
    .then(res => console.log('connected to mongoDb'))
    .catch(err => console.log('failed to connect to db'));


app.use("/productDB", productRouter);