const mongoose = require('mongoose')

//function for db connection
const connectDb = async() => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${ conn.connection.host}`.cyan.underline );

    } catch (error) {
        console.log(error);
        //fail to connect give error 1 code
        process.exit(1);
    }
}

module.exports = connectDb;