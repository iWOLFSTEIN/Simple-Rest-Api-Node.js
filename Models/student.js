const express = require("express");
const mongoose = require("mongoose");


const student_post = mongoose.Schema({

    id: {
        type: String,
        required: true
    },

    name: {
       type: String,
        required: true
    },

   
    date: {
        type: Date,
        default: Date.now
    }
 
});

module.exports = mongoose.model("student", student_post);


