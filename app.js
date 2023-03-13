const express = require('express')
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shop")
.then(() => {console.log('database created')})
.catch((err) => {console.log(err)})

app.listen(3000,() => {
    console.log('server is running on port 3000')
})