const express = require('express'); // router framework for node.js
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
    console.log("Fetching text for exercice " + req.params.id);
    const exercice = req.params.id;
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
    const requete = 'SELECT * FROM motscles where exercice =' + mysql.escape(exercice);
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
    const requete = req.query.q;
    console.log(requete);
    getConnection().query(requete, (err, rows, fields) => {
        if (err) {
            console.log("Failed to getAll: " + err);
            res.sendStatus(500);
            return
        }
        res.json(rows);

        console.log(rows[1].motcle);
    })
});

router.get('/easySqlRequest/:id', (req, res) => {
    console.log("trying 'sqlFacile request'... ");
    // récupérer les mots cles de l'exercice :
    const exercice = req.params.id;
    const requete = 'SELECT motcle FROM motscles where exercice =' + mysql.escape(exercice);
    getConnection().query(requete, (err, rows, fields) => {
        if (err) {
            console.log("Failed to getAll: " + err);
            res.sendStatus(500);
            return
        }
        res.json(rows);

        for (var i=0;i<rows.length;i++){
            console.log(rows[i].motcle);
        }
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