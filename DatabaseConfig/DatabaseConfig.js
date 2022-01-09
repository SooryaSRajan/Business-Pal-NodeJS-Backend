const mongoose = require("mongoose");

function ConnectMongoDB() {
    let connection = mongoose.connect(
        'mongodb://127.0.0.1:27017/local-business-db'
    );

    connection.then(() => {
        console.log("Connection to the database successfully");
    });
    connection.catch((error) => {
        console.log(`Connection Refused...${error}`);
    });
}
module.exports = ConnectMongoDB;