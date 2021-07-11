const fs = require("fs"); //Importing the file system module

let text = fs.readFileSync("demo.txt", "utf-8"); //Reading the content
console.log(text);
/*text = text.replace("to", "for"); 

fs.writeFileSync("demo2.txt", text); //Make a new file and write the content of text there */