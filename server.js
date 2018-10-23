const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, 'static');

app.use('/', express.static(publicPath));

app.listen( PORT, () => console.log(`server listening on port ${PORT} ...`) )
