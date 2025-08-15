        document.addEventListener("DOMContentLoaded", function(){
            const numberInput = document.getElementById('number-input');
            const checkButton = document.getElementById('checkButton');
            const msg = document.getElementById('msg');

            checkButton.addEventListener("click", function(){
                const number = parseInt(numberInput.value.trim());

                if(isNaN(number)){
                    msg.style.color = "red";
                    msg.innerHTML = `Please enter a valid number`;
                    return;
                }

                if(number <= 1){
                    msg.style.color = "red";
                    msg.innerHTML = `${number} is not a Prime Number`;
                    return;
                }

                let isPrime = true;
                for(let i = 2; i <= Math.sqrt(number); i++){
                    if(number % i === 0){
                        isPrime = false;
                        break;
                    }
                }

                if(isPrime){
                    msg.style.color = "green";
                    msg.innerHTML = `${number} is a Prime Number`;
                } else {
                    msg.style.color = "red";
                    msg.innerHTML = `${number} is NOT a Prime Number`;
                }
            });
        });