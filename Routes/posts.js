const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
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


router.delete("/:deleteId", async (request, response)=>{
    try{

     var deletedData=await student.remove({_id: request.params.deleteId});
    
    response.json(deletedData);
    }
    catch(e){
        console.log(e);
    }
});


router.patch("/:updateId", async(request, response)=>{
 try{
   var updatedData  = await student.updateOne({_id: request.params.updateId}, {$set: {
       name: request.body.name
   }});
   response.json(updatedData);
 }
 catch(e){
     console.log(e);
 }
});


module.exports = router;