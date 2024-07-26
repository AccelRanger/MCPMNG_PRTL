const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const promotionRoutes = require('./src/handler');

app.use('/mngportal', promotionRoutes);

app.listen(port, () => {
    console.log(`Server running on port number: ${port}`);
});
