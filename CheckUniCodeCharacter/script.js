const charinput = document.getElementById("char-input");
const checkbtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkbtn.addEventListener("click", ()=>{
    let charinputValue = charinput.value.trim()
    
    if(charinputValue === ""){
        result.textContent = "Please enter a valid character";
        result.style.color = "orange";
        return;
    }
    if(charinputValue.length > 1){
        result.textContent = "Please enter only one character";
        result.style.color = "orange";
        return;
    }

    let unicodeValue = charinputValue.charCodeAt(0);
    result.style.color = "#2d8659";
    result.textContent = `Unicode for "${charinputValue}" is U+${unicodeValue.toString(16).toUpperCase()} (${unicodeValue})`;
    result.style.transform = "scale(1.1)";
    setTimeout(() => result.style.transform = "scale(1)", 150);

})