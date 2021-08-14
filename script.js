const inputBirthDate = document.querySelector("#input-date");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector(".output");

function reverseDOB(dob){
    var dobReverse = 0;
    
    while(dob > 0){
        dobReverse = dobReverse* 10 + dob % 10;
        dob = Math.floor(dob/10);  
    }
    console.log(dobReverse);
    return dobReverse;
}

function checkPalindrome(){
    
    var dateOfBirthStr = (inputBirthDate.value).replaceAll('-', '');
    var dateOfBirth = Number(dateOfBirthStr);

    var dateOfBirthRev = reverseDOB(dateOfBirth);

    var palindromeNumber = isPalindrome(da)

    if(dateOfBirthRev === dateOfBirth){
        console.log("Your date of Birth is a palindrome Number.")
    }
    else{
        console.log("Your date of Birth is not a palindrome Number.")
    }
}

checkBtn.addEventListener('click', checkPalindrome);
