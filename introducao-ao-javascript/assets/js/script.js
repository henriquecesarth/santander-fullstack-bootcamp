var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var minusButton = document.getElementById('sub')
var plusButton = document.getElementById('add')


plusButton.addEventListener('click', increment)
minusButton.addEventListener('click', decrement)

function increment(){
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber >= 0){
        currentNumberWrapper.style.color = 'green';
    }
    
}

function decrement(){
    if(currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red'};
}

