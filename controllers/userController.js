const User=require('../models/user')



exports.getData=async(req,res)=>
{
      try
      {
           const user=await User.findById({_id:req.userId},{password:0,username:0,email:0})
           
           res.json({status:true,userdata:user.data})

      }
      catch(err)
      {
        console.log(err)
         res.json({status:false})  
      }
}

exports.addData=async(req,res)=>
{
       try
       {
            console.log(req.body)
            await User.findByIdAndUpdate({_id:req.userId},{
                $push:{
                    data:req.body
                }
            })

            res.status(200).json({status:true})

            
       }
       catch(err)
       {
         res.status(200).json({status:false})
       }
}