'use strict';

/*********************************DEPENDENCIES***********************************/
const express = require('express');

/*********************************CONST DECLARATIONS*****************************/
const app = express();
const PORT = process.env.PORT || 3000;

/*********************************MIDDLEWARE*************************************/
app.use(express.static('./public'));

/*********************************OTHER SETUP************************************/
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

/************************************ROUTES***************************************/
app.get('/', (req, res) => res.sendFile('index.html', {root: './public'}));