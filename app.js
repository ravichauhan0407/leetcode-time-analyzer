const  express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')
const bodyparser=require('body-parser')
const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/api',authRoutes)
app.use('/api',userRoutes)

app.use((req,res)=>
{
    res.status(400).json({message:'path does not exist!',status:false})
})

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.4mvk5w4.mongodb.net/?retryWrites=false&w=majority`,{ useNewUrlParser: true,
useUnifiedTopology: true }).then((res)=>
{
       console.log('connected')
       app.listen(8000)
})






