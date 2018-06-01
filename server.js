const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, 'static');

app.set('views', path.join(__dirname, './views'));

app.use('/static', express.static(publicPath));

app.listen( PORT, () => console.log(`server listening on port ${PORT} ...`) )
