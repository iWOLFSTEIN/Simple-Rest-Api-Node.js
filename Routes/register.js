const { response } = require("express");
const express = require("express");
const user = require("../Models/user");
const router = express.Router();


router.post("/registration", async (request, response)=>{

    const reg_user = new user({
       name: request.body.name,
       email: request.body.email,
       password: request.body.password
    });
  
    try{
       
    const saveData = await reg_user.save();
    
    response.json(saveData);    
}
    catch(e){
        
response.json({message: e});
    }

});


module.exports = router;