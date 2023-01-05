import React, { useEffect, useRef } from 'react'
import {Input} from 'antd'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import toast  from 'react-hot-toast'
import axios from 'axios'
import validator from 'validator'

export const Signup = () => {

   const navigate=useNavigate()
   const usernameInputRef=useRef()
   const emailInputRef=useRef()
   const passwordInputRef=useRef()

   const postUserDetail= (user)=>
   {
      return axios.post(`http://localhost:8000/api/register`,user
       ).then((res)=>
       {
            return res.data;
       }).catch((err)=>
       {
            console.log(err)
            return {status:false,message:'Error with Client'}
       })
   }

   const signupHandler=()=>
   {
      
       if(!validator.isEmail(emailInputRef.current.input.value))
       {
            toast.error('Incorrect Email')
       }
       else if(passwordInputRef.current.input.value.length<8)
       {
             toast.error('Password should have at least 8 character')
       }
       else
       {
             const user={email:emailInputRef.current.input.value,
            username:usernameInputRef.current.input.value,
            password:passwordInputRef.current.input.value
           }
             const res=postUserDetail(user).then((res)=>
             {
                  console.log(res)
                  if(res.status)
                  {
                        toast.success('User Succesfully Register')
                        navigate('/login')
                  }
                  else
                  {
                        toast.error(res.message)
                  }

             }).catch((err)=>{
                  toast.error('Something went Wrong!')
            })
             

           
       }
   }
  return (
    <div className='content-center'>
          <div className='login-container'>
            <div>
                <div className='input-fields'>
                <div className='label'>Email</div>
                <Input ref={emailInputRef} required={true} type='text'></Input>
                </div>
                <div  className='input-fields'>
                <div className='label'>Username</div>
                <Input ref={usernameInputRef} required={true} type='text'></Input>
                </div>
                <div className='input-fields'>
                <div className='label'>Password</div>
                <Input ref={passwordInputRef} required={true} type='password'></Input>
                </div>
                <div className='input-fields'>
                <button className='input-fields submit-btn' type='submit' onClick={()=>{signupHandler()}}>SignUp</button>
                </div>
                <div className='input-fields'>
                <Link to='/login' style={{textDecoration:'none'}}>Already have account</Link>
                </div>
                </div>
          </div>
    </div>
  )
}
