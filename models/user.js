const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
      email:
      {
         type:String,
         required:true
      },
      username:
      {
         type:String,
         required:true
      },
      password:
      {
           type:String,
           required:true
      },
      data:
      [
         {
             tag:
             {
                type:String,
                required:true
             },
             difficulty:
             {
                 type:String,
                 required:true
             },
             minutes:
             {
                 type:Number,
                 required:true
             }
         }
      ]
})


const userModel=mongoose.model('User',userSchema)

module.exports=userModel