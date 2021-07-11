const mongoose = require("mongoose"); //Importing mongoose
mongoose.connect("mongodb://localhost:27017/subhasisCart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //Connecting mongoDB

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connection established");
});

//Making a schema(The rules for storing data)
const kittySchema = new mongoose.Schema({
  name: String,
});

//Declaring a method for our schema
kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name
  console.log(greeting);
}

//Model: Finally compiled schema
var Kitten = mongoose.model('subhasisKitty', kittySchema); //Now we can make objects, that stored inside database

//Make object subhasisKitten
const subhasisKitten = new Kitten({ name: 'Subhasis' }); //Passing value
//console.log(subhasisKitten.name);
//subhasisKitten.speak(); //Calling the speak method

//Saving the data
//1. First it will create a collection in the name of the object(subhasisKitty)
//2. And stored in this collection
subhasisKitten.save(function (err, subhasisKitten) {
  if (err) return console.error(err);
  //subhasisKitten.speak();
});

//Fetching the data from database
Kitten.find({name: "Subhasis"}, function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})