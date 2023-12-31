const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const  createDatabase =()=>{
const DATABASE_URL = "mongodb://127.0.0.1:27017/subscribers";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
console.log("Database connection..")
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    // console.log("Deleting Previous data")
    await subscriberModel.deleteMany({});
    // console.log("Inserting Data");
    await subscriberModel.insertMany(data)
    // console.log("Disconnecting...")/
    await mongoose.disconnect();
    // console.log("Disconnected")
}
refreshAll()

}
createDatabase();

// module.exports=createDatabase;
