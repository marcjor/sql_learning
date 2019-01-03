const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('short'));
app.use(cors());

const router = require('./routes/sql_learning.js');
app.use(router);

app.listen(4040, () =>{
    console.log("API is running on port 4040...")
});