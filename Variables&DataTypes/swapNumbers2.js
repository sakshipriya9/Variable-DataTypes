// Using array destructuring(Modern JavaScript)

let a = 24;
let b = 30;

console.log("Before swap:");
console.log("a =",a, "b =",b);

// One Liner
[a,b] = [b,a];

console.log("After swap:");
console.log("a =",a, "b =",b);