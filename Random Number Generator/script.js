const randomNumber = document.getElementById('random-number');
const btnGenerate = document.getElementById('btn-generate');

const rand = Math.random();

// btnGenerate.onclick = function(){
//     randomNumber.textContent = rand;
// }

btnGenerate.addEventListener("click", ()=>{
    randomNumber.textContent = Math.floor(Math.random() * 10000) + 1;
})