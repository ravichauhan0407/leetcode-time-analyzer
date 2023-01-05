const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>
{

      try
      {

       const  token=req.headers["authorization"].split(' ')[1]
       jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>
       {
            if(err)
            {
              
                  res.status(200).send({message:'Auth failed',status:false})
            }
            else
            {
                  req.userId=decode.id
                  next()
            }
       })
    }
    catch(error)
    {
       
        res.status(200).send({message:'Auth failed',status:false})
    }
}