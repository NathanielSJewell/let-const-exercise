var PI = 3.14;
PI = 42; // stop me from doing this!

//ES2015 Version
const PI = 3.14;
PI = 42; //TypeError: Assignment to constant variable.

// - What is the difference between ***var*** and ***let***?
//Var allows hoisting, re-asignment, and re-declaration.
//let does not hoise, it can be reasigned, and cannot be re-declared.

// - What is the difference between **var** and ***const***?
//const does not hoist, cannot be re-asigned, cannot be re-declared.

// - What is the difference between **let** and **const**?
//let : cannot be re-declared. can be re-asigned. does not hoist
//const : cannot be re-declared or re-asigned, and does not hoist.

// - What is hoisting?
//Hoisting is the saving of the variable declaration, and "hoisted" to the "top" of the file before initialization of its assigned value. This only happens with var.
