const User=require('../models/user.js')
const jwt=require('jsonwebtoken')
const becrypt=require('bcryptjs')



exports.register=async(req,res)=>
{
         try
         {
            const isUserPresent=await User.findOne({email:req.body.email})

                if(isUserPresent)
                {
                      return  res.status(200).send({message:"user already present!",status:false})
                }

            const salt=await becrypt.genSalt(12)
            const password=await req.body.password
            const hashedpassword=await becrypt.hash(password,salt)
            
            req.body.password=hashedpassword

             const user =new User(req.body)

             await user.save()
             res.status(200).send({message:'user created successfully',status:true})
         }
         catch(error)
         {
             
             res.status(200).send({mesaage:'Something went wrong',status:false})
         }
}



exports.login=async(req,res)=>
{
    
    try
    {
      console.log(req.body)
      const  user=await User.findOne({email:req.body.email})

      if(!user)
      {
            return res.status(200).send({message:"user doesn't exist",status:false})
      }

      const matched=await becrypt.compare(req.body.password,user.password)
      if(!matched)
      {
           return res.status(200).send({message:'Incorrect password!',status:false})
      }
      else
      {
          const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
          user.password=undefined
          return  res.status(200).send({message:"successfully LogedIn",status:true,token:token,user:user})
      }
    }
    catch(error)
    {
        res.status(200).send({status:false,message:"Error in database"})
    }

}