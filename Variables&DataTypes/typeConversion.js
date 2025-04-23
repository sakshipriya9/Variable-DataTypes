//Type conversion---"123" to a number
let x = "123";
console.log(typeof x);
x = Number("123"); // We can also use parseInt keyword at the place of number keyword
console.log("After conversion:",typeof x);

//123 to string
let y = 123;
console.log(typeof y);
y = String(123);
console.log("After conversion:",typeof y);

//Boolean to a number
let z = true;
console.log(typeof z);
z = parseInt(true);
console.log("After conversion:",typeof z);

//"abc" to a number
let a = "abc";
console.log(typeof a);
a = parseInt("abc");
console.log("After conversion:",typeof a);