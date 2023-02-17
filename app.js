const express = require("express");
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");


const app = express();
dontenv.config();

// Database connection
mongoose.set("strictQuery", true)
        .connect(process.env.Mongo_Connection_String)
        .then(() => console.log('Connection established Successfully'))
        .catch(err => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.Cookie_Secret));

// routing setup

// error handling

app.listen(process.env.PORT, ()=> {
    console.log(`listening to port ${process.env.PORT}`)
});