console.log("This is mod.js");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum/arr.length;
}

//In JS we explicitly need to export the function
//module.exports = average;

//If it exports a object
module.exports = {
    name: "Subhasis",
    marks: average,
    dept: "IT"
}