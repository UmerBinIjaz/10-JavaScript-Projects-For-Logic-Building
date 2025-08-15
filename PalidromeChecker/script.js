const textInput = document.getElementById('text-input');
const checkbtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkbtn.onclick = function(){
    const textInputNum = textInput.value.trim();
    let left = 0, right = textInputNum.length - 1;
       let flag = true;
    while (left < right) {
        if (textInputNum[left] != textInputNum[right]) {
            flag = false;
            break;
        }
        left++;
        right--;
    }
  	
  	if (flag){
        result.innerHTML = `"${textInputNum}" is a Palindrome.`;
        result.style.color = "green";
    }
    else{
        result.innerHTML = `"${textInputNum}" is not a Palindrome.`;
        result.style.color = "red";
    }
}