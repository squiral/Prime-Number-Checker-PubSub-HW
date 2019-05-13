const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
    PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
        const isPrimeOrNot = event.detail;
        this.displayResult(isPrimeOrNot, event.detail);
    })
};

ResultView.prototype.displayResult = function (boolean, number) {
    const result = document.querySelector('#result');
    if (boolean === false) {
        result.textContent = `${number} is NOT a prime number.`
    }
    else {
        result.textContent = `${number} IS a prime number.`
    };
}

module.exports = ResultView;