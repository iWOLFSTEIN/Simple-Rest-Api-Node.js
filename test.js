const { response } = require("express");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.json());



// Importing the routes

const postsRoutes = require("./Routes/posts");


// Adding a Middleware (a function that runs when a specific route is used)

// app.use("/hello", ()=>{
//     console.log("printing a hello world message");
// });
app.use("/posts", postsRoutes);



// Defining the routes through which were are getting data

app.get("/", (request, response)=>{
 response.send("hello world");
});


// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
},6000000).then(console.log("connected to database"))
.catch((err) => console.log(err));;


// Listen the port

app.listen(3000, ()=> console.log("server has started"));