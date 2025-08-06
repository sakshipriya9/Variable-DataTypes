//Que. Write a function to reverse a string. 

//Define a function to reverse a string
function reverseString(str){  
    return str.split('').reverse().join('')
     // Split the string into an array of characters
    // Reverse the array
    // Join the array back into a string
}

// Call the function and print the result to the console
console.log(reverseString("sakshi"));
console.log(reverseString("Hello"));