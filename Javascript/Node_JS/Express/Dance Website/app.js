const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true}); //Connecting to the database name contactDance

//Defining mongoose schems
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

//Making the model
const contact = mongoose.model('Contact', contactSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded()); //To take the data from the form to the express

//PUG SPECIFIC STUFFS
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

//END-POINTS
app.get('/', (req, res)=>{
    const con = "Fill This Now"
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const con = "Fill This Now"
    const params = {}
    res.status(200).render('contact.pug', params);
})

//Handling post request from contact page
app.post('/contact', (req, res)=>{
    var myData = new contact(req.body); //Making a object of requesting data
    myData.save().then(()=>{ //Saving the data
        res.send("This item has been saved")
    }).catch(()=>{ //If any error happens
        res.status(400).send("Not saved")
    });
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});