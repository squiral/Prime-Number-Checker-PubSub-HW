const PubSub = require('../helpers/pub_sub.js');

const InputView = function(){

}

InputView.prototype.bindEvents = function () {
    const input = document.querySelector('#prime-checker-form');
    input.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputNumber = event.target.number.value;
        PubSub.publish('InputView:number-submitted', inputNumber)
    });
};

module.exports = InputView;