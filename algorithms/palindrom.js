//  Write a function `isPalindrome(s)` that takes a string `s` and returns `true` if it is a palindrome (ignoring non-alphanumeric characters and case), and `false` otherwise.

//  a palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// e.g. "racecar" is a palindrome, while "hello" is not.




// albert ---- 


function isPalindrome(s) {
    const countUp = 0
    const countDown = s.length - 1;

    for(let i=0; i < s.length; i++) {
        if(s[countUp] !== s[countDown]) {
            return false;
        }
        countUp++;
        countDown--;
    }

    return true;
}

function isPalindrome2(s) {
    return s === s.split("").reverse().join("");
}

