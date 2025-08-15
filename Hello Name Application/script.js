const btn = document.getElementById('button-popup');
const span = document.getElementById('name-text');

btn.onclick = function(){
    const YourName = prompt("Please Enter Your Name");
    span.textContent = YourName;
    span.style.color = "blue";
}