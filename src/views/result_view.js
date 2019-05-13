const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
    PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
        const isPrimeOrNot = event.detail;
        this.displayResult(isPrimeOrNot);
    })
};

ResultView.prototype.displayResult = function (boolean) {
    const result = document.querySelector('#result');
    PubSub.subscribe('InputView:number-submitted', (event) => {
        if (boolean === true) {
            result.textContent = `${event.detail} IS a prime number.`
        }
        else {
            result.textContent = `${event.detail} is NOT a prime number.`
        }
       
    })
    
}

module.exports = ResultView;