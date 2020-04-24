const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

const port = 5000;



//const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://Sidharth:Sidharth@cluster0-jc0gi.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/User');
app.use('/user',userRouter);


const WatchRouter = require('./routes/Watch');
app.use('/watch',WatchRouter);

const LaptopRouter = require('./routes/Laptop');
app.use('/laptop',LaptopRouter);

app.listen(5000,()=>{
    console.log('express server started');
});