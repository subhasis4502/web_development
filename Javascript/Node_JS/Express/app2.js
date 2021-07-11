
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded()); //To take the data from the form to the express

//PUG SPECIFIC STUFFS
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

//END-POINTS
app.get('/', (req, res)=>{
    const con = "Fill This Now"
    const params = {'title': 'Pub or PubG', 'content': con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    //Taking the data from the form
    name = req.body.name
    age = req.body.age
    address = req.body.address
    
    //Saved the data to our device
    let output_to_write = `Name of the user is  ${name}, ${age} years old and lived in ${address}`
    fs.writeFileSync('output.txt', output_to_write)
    const params = {'message': 'Form submitted successfully'}
    res.status(200).render('index.pug', params);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})