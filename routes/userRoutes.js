const router=require('express').Router()
const userController=require('../controllers/userController')
const jwtVerification=require('../controllers/jwtverify')

router.post('/add-data',jwtVerification,userController.addData)

router.get('/get-data',jwtVerification,userController.getData)


module.exports=router