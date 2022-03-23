const { response } = require("express");
const express = require("express");
const student = require("../Models/student");
const router = express.Router();



router.get("/", async (request, response)=> {
   try{
     const getAllData =await student.find();
  
     response.json(getAllData);
    
   }
   catch(e){
    response.json({message: e});
    
   }
});


router.post("/", async (request, response)=>{

    const stu = new student({
        id: request.body.id,
        name: request.body.name
    });
  
    try{
       
    const saveData = await stu.save();
    
    response.json(saveData);    
}
    catch(e){
        
response.json({message: e});
    }



});


module.exports = router;