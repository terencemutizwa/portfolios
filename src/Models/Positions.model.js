class Position {
    constructor({id, portfolioId, currency, value, date} = {
        id: null,
        portfolioId: null,
        currency: '',
        value: 0,
        date: ''
    }) {

        Object.assign(this,{...arguments});

    }
}

module.exports = Position;
