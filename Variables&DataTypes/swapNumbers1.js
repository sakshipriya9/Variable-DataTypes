// Swap two numbers without using third variable

a = 50;
b = 30;

console.log("Before swap:");
console.log("a =",a, "b =",b);

// Swap the numbers using arithmetic operator

a = a + b;
b = a - b;
a = a - b;

console.log("After swap:");
console.log("a =",a, "b =",b);