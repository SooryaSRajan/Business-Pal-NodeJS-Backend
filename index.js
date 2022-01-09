const Express = require("express");
const app = Express();
const PORT = process.env.PORT || 8080;
app.use(Express.json());

const WriteBusinessInformation = require("./Routes/WriteBusinessInformation");
const ReadBusinessInformation = require("./Routes/ReadBusinessInformation");
const connectDB = require("./DatabaseConfig/DatabaseConfig");
connectDB()

app.use("/", WriteBusinessInformation)
app.use("/", ReadBusinessInformation)

app.get("/", (request, response) => {
    response.status(200).send("Welcome to the root node of Local Business Backend!");
});

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
});