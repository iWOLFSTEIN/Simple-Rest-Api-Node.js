const express = require("express");
const mongoose = require("mongoose");


const user = mongoose.Schema({

    name: {
        type: String,
        min: 6,
        required: true
    },

    email: {
       type: String,
       min: 7,
        required: true
    },

   
    password: {
        type: String,
        min: 6,
        
      required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
 
});

module.exports = mongoose.model("user", user);


