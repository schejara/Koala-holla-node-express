const express = require('express');
const koalaRouter = express.Router();


// DB CONNECTION
const pool = require('../modules/pool')

// GET

koalaRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koala"' ;
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
  });
// POST

koalaRouter.post('/',  (req, res) => {
  let newKoala = req.body;
  console.log(`Adding koala`,newKoala );

  let queryText = `INSERT INTO "koala" ("name", "age", "favoriteColor", "readytotransfer", "notes")
                   VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [newKoala.name, newKoala.age, newKoala.favoriteColor, newKoala.readytotransfer,newKoala.notes])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new Koala`, error);
      res.sendStatus(500);
    });
});

// PUT

koalaRouter.put('/:id', (req, res) => {
  console.log('req.params', req.params.id);
  let body = req.body
  let id = req.params.id
  let {readytotranser } = req.body;
  let sqlText = `
  UPDATE "koala"
  SET "readytotranser" = $1
  WHERE "id" = $2
  `
  let params = [readytotranser,id];
pool.query(sqlText, params).then( result => {
    res.sendStatus(204);
}).catch(error => {
    console.log(error)
    res.sendStatus(500);
});
});

// DELETE

koalaRouter.delete('/:id', (req, res) => {
  // NOTE: This route is incomplete.
  console.log('req.params', req.params.id);
  let id = req.params.id

  let sqlText = `DELETE FROM "koala" WHERE "id" = $1`
  let params = [id];

  pool.query(sqlText, params).then( result => {
      res.sendStatus(204);
  }).catch(error => {
      console.log(error)
      res.sendStatus(500);
  })

});



module.exports = koalaRouter;