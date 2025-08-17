const express = require("express")
const App = express();
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config")

App.use(cors());
// App.options('*',cors()); 

// Middleware
App.use(BodyParser.json());

// Routess
const CategoryRoute = require("./routes/CategoryRoute")
App.use(`/api/category`,CategoryRoute)

// Database 
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DataBase is connected")

        // Server
        App.listen(process.env.PORT, () => {
            console.log(`Server is running http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })



