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

router.get('/easyExercice/:id', (req, res)=> {
    console.log("Fetching text for exercice 'facile'...");
    const exercice = req.params.id;
    console.log(exercice);
    const requete = 'SELECT * FROM exercices where exercice =' + mysql.escape(exercice);
    // const requete = 'SELECT * FROM motscles';
    getConnection().query(requete, (err, rows, fields) => {
        if (err) {
            console.log("Failed to getAll: " + err);
            res.sendStatus(500);
            return
        }
        res.json(rows)
    })
});

router.get('/easyMotsCles/:id', (req, res)=> {
    console.log("Fetching keywords for exercice 'facile'...");
    const exercice = req.params.id;
    console.log(exercice);
    const requete = 'SELECT * FROM motscles where exercice =' + mysql.escape(exercice);
    // const requete = 'SELECT * FROM motscles';
    getConnection().query(requete, (err, rows, fields) => {
        if (err) {
            console.log("Failed to getAll: " + err);
            res.sendStatus(500);
            return
        }
        res.json(rows)
    })
});

router.get('/easySqlRequest', (req, res) => {
    console.log("trying 'sqlFacile request'... ");
    // tests à effectuer :

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