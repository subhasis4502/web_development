const express = require("express")
const path = require("path");
const { title } = require("process");

const app = express();
const port = 80;

//For serving static files
app.use('/static', express.static('static'));

//Set the template engine as pug
app.set('view engine', 'pug');

//Set the views directory
app.set('views', path.join(__dirname, 'views'));

//Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hey', message: 'Hello There! using pug for first time'});
});

//Handling get requests
app.get("/", (req, res)=>{
    res.send("This is my homepage of my first express app");
});

app.get("/about", (req, res)=>{
    res.send("This is my about of my first express app");
});

//Handling post requests
app.post("/about", (req, res)=>{
    res.send("This is my post about of my first express app");
});

app.get("/contact", (req, res)=>{
    res.send("This is my contact of my first express app");
});

app.get("/services", (req, res)=>{
    res.send("This is my services of my first express app");
});

app.get("/this", (req, res)=>{
    res.status(404).send("404 not found"); //Sending stautus code(404)
});

//Listening to a port
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})