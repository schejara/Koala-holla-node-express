const express = require('express');
const app = express();
app.use(express.json());

// ROUTES
const koalaRouter = require('./router/koala.router.js');
app.use('/koalas', koalaRouter);
app.use(express.static('server/public'));

const PORT = process.env.PORT || 5001;
// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
