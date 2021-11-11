const path  = require("path")
const express = require("express");
const passport = require("passport")
const signupRouter = require('./Routes/signup')
const loginRouter = require('./Routes/login')
const logoutRouter = require('./Routes/logout')
const getuserRouter = require('./Routes/getuser')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const session = require("express-session")
const cors = require("cors")


connectDB()
const app = express();
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));
// app.use(cookieParser());
// app.use(cookieParser('abcdefg'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/', signupRouter);
app.use('/login', loginRouter)
app.use('/getuser', getuserRouter)
app.use('/logout', logoutRouter)

module.exports = app;