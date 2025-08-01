const mongoose = require('mongoose');
require('dotenv')

function connectDB(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Connected to DB")
    }).catch(err =>{
        console.log(err)
    })
}


module.exports = connectDB;