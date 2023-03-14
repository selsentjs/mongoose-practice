const express = require('express')

const mongoose = require('mongoose');
const app = express();

// database
mongoose.connect("mongodb://localhost:27017/userDetails")
.then(() => {console.log('database created')})
.catch((err) => console.log(err))

// router
const userRouter = require('./routes/userRoute');
const friendRouter = require('./routes/friendRoute');

// app.use
app.use(express.json());

// get
app.get('/', (req,res) => {
    res.send('welcome')
})

// route
app.use('/user', userRouter);
app.use('/friend', friendRouter);

app.listen(3000,() => {
    console.log('server is running on port 3000')
})