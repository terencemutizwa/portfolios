class Portfolio {
    constructor({id,name, positions}={id:'', name:'', positions:[]}){
        Object.assign(this,{...arguments[0]});
    }
}

module.exports = Portfolio;
