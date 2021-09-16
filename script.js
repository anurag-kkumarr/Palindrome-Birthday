const inputBirthDate = document.querySelector("#input-date");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector(".output");


function reverseString(str){
    var listOfChar = str.split('');
    var reverseListOfChar = listOfChar.reverse();
    var reversedString = reverseListOfChar.join('');
    return reversedString;
}

function isPalindrome(str){
    var reverse = reverseString(str);
    if(str === reverse){
        return true;
    }
    else{
        return false;
    }
}

function changeDateToStr(date){
    var dateStr = { day: '', month: '', year: ''};

    if(date.day < 10){
        dateStr.day = "0"+ date.day; 
    }
    else{
        dateStr.day = date.day.toString();
    }

    if(date.month < 10){
        dateStr.month = "0" + date.month;
    }
    else{
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();
    return dateStr;
}



function getAllDateFormats(date){
    var dateStr = changeDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllDate(date){
    var listOfPalindromes = getAllDateFormats(date);
    
    var checkPalindrome = false;

    for( var index = 0; index < listOfPalindromes.length; index++){
        if(isPalindrome(listOfPalindromes[index])){
            checkPalindrome = true;
            break;
        }
    }
    return checkPalindrome;
}

function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    if(year % 400 === 0){
        return false;
    }
    if(year % 4 === 0){
        return true;
    }
    return false;
}

function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(month ===2){
        if(isLeapYear(year)){
            if(day > 29){
                day =1;
                month++;
            }
        }
        else {
            if(day > 28){
                day =1;
                month++;
            }
        }
    }
    else {
        if(day > daysInMonth[month - 1]){
            day = 1;
            month++;
        }
    }

    if(month > 12){
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

function getNextPalindromeDate(date){
    var count = 0;
    var nextDate = getNextDate(date);

    while(1){
        count++;
        var isNextDatePalindrome = checkPalindromeForAllDate(nextDate);
        if(isNextDatePalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }

    return [count, nextDate];
}


function clickHandler(e){
    var dateOfBirthStr = inputBirthDate.value;

    if(dateOfBirthStr === ''){
        outputDiv.innerText = "Select the Date to proceed"
    }

    if(dateOfBirthStr !== ''){
        var dateOfBirth = dateOfBirthStr.split('-');
        var date = {
            day: Number(dateOfBirth[2]),
            month: Number(dateOfBirth[1]),
            year: Number(dateOfBirth[0])
        };
        var isPalindrome = checkPalindromeForAllDate(date);
        
        if(isPalindrome){
            outputDiv.innerText = "Yes! your birthaday is a palindrome ☺️☺️"
        }
        else {
            var [count, nextDate] = getNextPalindromeDate(date);
            outputDiv.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${count} days!😥`
        }
    }
}


checkBtn.addEventListener('click', clickHandler);



/*function reverseDOB(dob){
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
*/