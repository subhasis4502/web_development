console.log("This is live");

//Declaring function
function status(name, greetText = "Greetings from javascript"/*Default value*/) {
    console.log(greetText + " " + name);
    console.log(name + " is an IT student");
}

//Return type function
function sum(a,b,c) {
    return a+b+c;
}

let name1 = "Subhasis";
let name2 = "Ranajoy";
let name3 = "Soumya";
let name4 = "Amit";
let greetText = "Good Morning!";

//Function calling
status(name1, greetText);
status(name2, greetText);
status(name3, greetText);
status(name4);

let sumVal = sum(2, 3, 4);
console.log(sumVal);