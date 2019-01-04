const express = require('express');
const mysql = require('mysql');
const router = express.Router();

router.get('/easy', (req, res)=> {
    console.log("Fetching table 'personnes'...");

    const getAll = "SELECT * FROM personnes";
    getConnection().query(getAll, (err, rows, fields) => {
        if (err) {
            console.log("Failed to getAll: " + err);
            res.sendStatus(500);
            return
        }

        res.json(rows)
    })
});

router.get('/facileTest', (req, res) => {
    console.log("trying 'sqlFacile request'... ");
    getConnection().query(req, [legumeId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to execute request " + err);
            res.sendStatus(500);
            return
        }

        res.json(rows)
    })
});

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'sql_learning'
});

function getConnection() {
    return pool
}

module.exports = router;