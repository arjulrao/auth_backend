require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db')



connectDB();

// Server Start
app.listen(3000, ()=> {
    console.log("Server is live on port number 3000.")

});
