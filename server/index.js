const express = require('express');

const database = require('./config/database');

const app = express();
const port = process.env.PORT || 5000;

/* Initialize connections */

database.init();

/* Main logic */



/* Start Express server */

app.listen(port, () => console.log(`Server started on port ${port}`));
