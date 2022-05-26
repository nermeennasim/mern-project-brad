
//declare all dependencies for backend/API

const { urlencoded } = require('body-parser');
const {errHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDb = require('./config/db')
const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT|| 5000;

//call db connection on start of app
connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))



//set api route to post man service
app.use('/api/goals',(require('./routes/goalRoutes')));

//error routes wil override all express error handling
app.use(errHandler)

//starting server using app.listen
    app.listen(port,() =>
     {
         console.log('Server has started on :'+ port);
        }
    );

