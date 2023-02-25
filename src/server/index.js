// TODO: Configure the environment variables

const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081
const path=require('path');
//  add Configuration to be able to use env variables
require("dotenv").config();




const express=require('express');
// Start up an instance of app
const app=express();

//access JSON data sent
const bodyParser=require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.


// Cors for cross origin allowance

// Initialize the main project folder
//app.use(express.static('../client'))

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))





// API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'

const apiKey = process.env.API_KEY
//console.log("app: "+apiKey)
let userInput = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

let articleUrl='';
app.post('/saveData',function(req, res){
    articleUrl=req.body.url;
    res.json({msg:"Done"});
    console.log(articleUrl);

})

app.get('/all',async function(req, res){
    const apiURL = `${baseURL}key=${apiKey}&url=${articleUrl}&lang=en`
    console.log(apiURL);
    const response = await fetch(apiURL)
    const mcData = await response.json()
    res.send(mcData);

})
/**    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`
    const response = await fetch(apiURL) */
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
