//console.log("This is index.js");
//console.log(mod);

//const average = require('./mod'); //Importing the custom module
//console.log(average([3,4,5])); //Calling the function from the module

const mod = require('./mod');
console.log(mod.name); //If its export a object then we have to use a '.' operator
console.log(mod.dept);
console.log(mod.marks([90,92,90.5]));

