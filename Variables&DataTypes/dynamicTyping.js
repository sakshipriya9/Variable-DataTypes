//Assign different types of values to the same variable and print its type

let x;
console.log(typeof x); // We use type of keyword to know the type of the given value

x = "Sakshi";
console.log(typeof x); 

x = 5;
console.log(typeof x);

x = true;
console.log(typeof x);

x = null;
console.log(typeof x);
 
x = {
    name : "Sakshi",
    age : 24,
    Address : "New Delhi"
}
console.log(typeof x);

x = ["Sakshi", 56, false, 78, "age"];
console.log(typeof x);