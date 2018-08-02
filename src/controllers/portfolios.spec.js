const chai = require('chai');
const chaiHttp = require('chai-http');
const proxyquire = require('proxyquire');
const sinon = require('sinon');
const expect = chai.expect;
chai.use(chaiHttp);

const data = require('../../database/data');
const req = {
    params: {currency:''},
};

const res = {
    sendCalledWith: '',
    send: sinon.spy(),
    json: sinon.spy()
};

class DatabaseConnection {

    constructor() {
        this.load = sinon.stub().resolves(data);
    }
}

const dbConnection = new DatabaseConnection();

class DatabaseClient {
    constructor() {
        this.connect = sinon.stub().resolves(dbConnection);
    }
}

const dbClient = new DatabaseClient();

const portfoliosController = proxyquire('./portfolios.controller', {'../../database/index': dbClient});


describe('Portfolios Controller', function() {
    it('connects to db', () => {
        portfoliosController.getPortfolios(req, res);
        expect(dbClient.connect.calledOnce).to.be.true;
        expect(dbClient.connect).to.not.throw();
    });

    it('get portfolios from db', async function() {
        portfoliosController.getPortfolios(req, res);
        sinon.assert.calledOnce(dbConnection.load);
    });

    it('returns all portfolios if no filter', function(){
        portfoliosController.getPortfolios(req, res);
        expect(res.json.lastCall.lastArg.length).to.equal(data.portfolios.length);
    });

    it('filters portfolios by currency', function(){
        req.params.currency = 'CAD';
        portfoliosController.getPortfolios(req, res);
        expect(res.json.lastCall.args.length).to.below(data.portfolios.length);
    });

});
