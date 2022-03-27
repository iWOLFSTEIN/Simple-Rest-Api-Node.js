const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

// Importing the routes
const postsRoutes = require("./Routes/posts");
const user_model = require("./Routes/register");


const app = express();


// Adding a Middleware (a function that runs when a specific route is used)

app.use(bodyParser.json());
app.use(cors());
app.use("/posts", postsRoutes);
app.use("/user", user_model);



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