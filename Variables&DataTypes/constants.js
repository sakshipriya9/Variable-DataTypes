//Declare a constant object and try to change one of its properties

const mySelf = {
    name: "Sakshi",
    age: 24,
    profession: "Full Stack Developer",
    company: "Microsoft"
};
console.log(mySelf);

 mySelf.age = 22; //will change the value of age key
// console.log(mySelf); 

mySelf["company"]= "Apple"; //will change the value of company key
// console.log(mySelf);

// TypeError: Assignment to constant variable.
// mySelf = {};
// console.log(mySelf);