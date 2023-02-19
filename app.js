// external imports
const express = require("express");
const mongoose = require("mongoose");
const dontenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {errorHandler, notFoundHandler} = require("./middleware/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const inboxRouter = require("./router/inboxRouter");
const userRouter = require("./router/userRouter");

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
app.use('/', loginRouter);
app.use('/inbox', inboxRouter);
app.use('/users', userRouter);

// 404 Not found Handler
app.use(notFoundHandler);

// error handling
app.use(errorHandler);


app.listen(process.env.PORT, ()=> {
    console.log(`listening to port ${process.env.PORT}`)
});