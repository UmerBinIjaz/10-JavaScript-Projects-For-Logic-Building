// const bulb = document.getElementsByClassName(".bulb");
const switchclass = document.querySelector(".switch");
const body = document.body;

switchclass.addEventListener("click", ()=>{
    body.classList.toggle("on");
})