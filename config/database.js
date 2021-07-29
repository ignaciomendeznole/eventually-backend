const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' })

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        }) ;
        console.log('successfully connected to database')
    } catch (error) {
        console.log('could not connect to database');
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDb