//Synchronous or blocking - line by line execution
//Asynchronous or non-blocking - line by line execution not guaranteed, callbacks will fire

const fs = require("fs"); //Importing the file system module

fs.readFile("demo.txt", "utf-8", (err,data)=>{
    console.log(err,data); //This function is only executed after the read is completed
});
console.log("Our message is:"); //This is executed first because the previous task take some time to execute, this is why it is called asynchronous