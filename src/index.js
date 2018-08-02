const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./Services/logger');

const runTests = require('./index.test.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    const testResult = runTests();
    res.json(testResult);
});

const portforliosController = require('./controllers/portfolios.controller');
app.get('/v1/portfolios/:currency?', portforliosController.getPortfolios);


/*
 * Error Handling
 */

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    logger.error(err);

    res.status(404).send();
});
app.listen(3000, () => console.log('Server started on port 3000'));


