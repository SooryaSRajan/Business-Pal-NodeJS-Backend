const mongoose = require("mongoose");
require("dotenv").config();

function ConnectMongoDB() {
    let connection = mongoose.connect(
        //'mongodb://127.0.0.1:27017/local-business-db'
        process.env.MONGO_CLIENT
    );

    connection.then(() => {
        console.log("Connection to the database successfully");
    });
    connection.catch((error) => {
        console.log(`Connection Refused...${error}`);
    });
}
module.exports = ConnectMongoDB;