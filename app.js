/**
 * app.js
 * Entry point file for contacts-api application
 * Project 3
 * Name: SCC Student
 * COMP2150 Web Services
 */

let express = require('express')
let app = express();
const apiRouter = require("./api-router.js");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

// set up mongoose and body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// connect to mongoose
mongoose.connect("mongodb://localhost/contacts", { useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the DB.");
} else {
    console.log("DB connected successfully");
}

var port = 8080;

app.use("/api", apiRouter);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running contacts-api on port " + port);
});