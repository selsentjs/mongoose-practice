const express = require('express')

const mongoose = require('mongoose');
const app = express();

// database
mongoose.connect("mongodb://localhost:27017/shop")
.then(() => {console.log('database created')})
.catch((err) => console.log(err))

// router
const userRouter = require('./routes/userRoute');

// app.use
app.use(express.json());

// get
app.get('/', (req,res) => {
    res.send('welcome')
})

// route
app.use('/user', userRouter);

app.listen(3000,() => {
    console.log('server is running on port 3000')
})