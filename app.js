const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const app = express();


app.use(morgan('tiny'));
app.use(bodyParser.json());


app.get("/", (req, res, next) => {

    res.send("Hello World!");
});

const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`The server is listening at ${port}`);
});