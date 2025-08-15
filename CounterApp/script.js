const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

const valueNum = document.getElementById('value');

increase.onclick = function(){
    const number = parseInt(valueNum.textContent);
    valueNum.textContent = number + 1;
}

decrease.onclick = function(){
    const number = parseInt(valueNum.textContent);
    if(number > 0){
        valueNum.textContent = number - 1;
    }
}

reset.onclick = function(){
    const number = parseInt(valueNum.textContent);
    valueNum.textContent = 0;
}
