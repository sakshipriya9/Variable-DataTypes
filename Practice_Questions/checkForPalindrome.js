// Check if a string is a palindrome (same forwards and backwords).

function isPalindrome (str){
    const reserved = str.split('').reverse().join('');
    return str === reserved; //Compare the original string with the reversed string.If they are the same, it's a palindrome.
}

console.log(isPalindrome("madam"));