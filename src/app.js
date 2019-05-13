const InputView = require('./views/input_view.js');
const PrimeChecker = require('./models/prime_number_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView();
  inputView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
