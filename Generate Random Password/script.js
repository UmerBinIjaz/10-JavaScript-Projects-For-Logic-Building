const btn = document.getElementById("btn");
const passwordbox = document.getElementById("password");
const copy = document.getElementById("copy");


// btn.addEventListener("click", ()=>{
//     input.value = Math.random(1000);
// })

const generatePassword = ()=>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-'~[]"

    let password = "";
    const lengthofPassword = 8;

    for(let i = 0; i < lengthofPassword; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordbox.value = password;
}

btn.addEventListener("click", generatePassword);

copy.addEventListener("click", ()=>{
    
    const passwordCopy = passwordbox.value.trim();
    if(!passwordCopy){
        alert("No Password to Copy! Please Generate a Password First")
        return;
    }

    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password Copied Successfully")
    });
});

