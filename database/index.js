const data = require('./data');
const logger = require('../src/Services/logger');

class DatabaseConnection {
    constructor(server) {
        this.server = server;
    }

    // noinspection JSUnusedGlobalSymbols
    // noinspection JSMethodCanBeStatic
    /**
     * Loads all data.
     * @returns {Promise<{portfolios, positions}>}
     */
    load() {
        logger.info('Database: loaded');
        return Promise.resolve(data);
    }
}

/**
 * A mock database client that simulates getting data from a database and a slow initial connection.
 */
class DatabaseClient {
    connect(server) {
        return new Promise((resolve, reject) => {
            if (server === null) {
                reject(new Error('No server specified'));
            }
            setTimeout(
                () => {
                    logger.info('Database: connected');
                    resolve(new DatabaseConnection(server));
                },
                2000);
        });
    }
}

module.exports = new DatabaseClient();
