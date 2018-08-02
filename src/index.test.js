// we cannot use jest and describe() it() syntax in here
// so we just create a list of tests in here
const shouldReturnTrue = () => {
    return true;
};

module.exports = () => {
    return {
        shouldReturnTrue: shouldReturnTrue()
    }
};
