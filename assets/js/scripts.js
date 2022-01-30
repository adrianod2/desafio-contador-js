var currentNumber1Wrapper = document.getElementById('currentNumber1')
var currentNumber1 = 0;

var currentNumber2Wrapper = document.getElementById('currentNumber2')
var currentNumber2 = 0;


function increment1() {
   currentNumber1 = currentNumber1 + 1;
   currentNumber1Wrapper.innerHTML = currentNumber1;
}

function decrement1() {
   currentNumber1 = currentNumber1 - 1;
   currentNumber1Wrapper.innerHTML = currentNumber1;
}

function increment2() {
   currentNumber2 = currentNumber2 + 1;
   currentNumber2Wrapper.innerHTML = currentNumber2;
}

function decrement2() {
   currentNumber2 = currentNumber2 - 1;
   currentNumber2Wrapper.innerHTML = currentNumber2;
}

