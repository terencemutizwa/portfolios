const logger = require('../Services/logger');
const db = require('../../database/index');

const Portfolio = require('../Models/Portfolio.model');

async function getPortfolios(req, res) {

    try {
        const currency = req.params.currency;
        const connection = await db.connect('server');
        const {portfolios, positions} = await connection.load();
        const result = [];

        portfolios.forEach(portfolio => {
            portfolio.positions = positions.filter(pos => {
                if (currency) {
                    return (pos.portfolioId === portfolio.id && pos.currency === currency);
                }
                return pos.portfolioId === portfolio.id;
            });

            if (portfolio.positions.length)
                return result.push(new Portfolio(portfolio));
        });

        res.json(result);

    } catch (e) {
        logger.error(e);
        res.status(500).send('Error getting portfolios');
    }

}

module.exports = {
    getPortfolios
};
