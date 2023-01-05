import React, { useContext, useEffect, useRef } from 'react'
import {Input} from 'antd'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import toast  from 'react-hot-toast'
import axios from 'axios'
import validator from 'validator'
import AuthContext from '../context/LoggedInContext'
export const Login = () => {

   const context=useContext(AuthContext)
   const  navigate=useNavigate()
   const emailInputRef=useRef()
   const passwordInputRef=useRef()

   const logUserDetail= (user)=>
   {
      return axios.post(`http://localhost:8000/api/login`,user
       ).then((res)=>
       {
            return res.data;
       }).catch((err)=>
       {
            console.log(err)
            return {status:false,message:'Error with Client'}
       })
   }

   const loginHandler=()=>
   {
       console.log(emailInputRef)
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
            password:passwordInputRef.current.input.value
           }
             const res=logUserDetail(user).then((res)=>
             {
                  
                  if(res.status)
                  {
                       localStorage.setItem('jwt',res.token)
                       context.updateAuth(true)
                       navigate('/')
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
                <Input  ref={emailInputRef} type='text'></Input>
                </div>
                <div className='input-fields'>
                <div className='label'>Password</div>
                <Input ref={passwordInputRef} type='password'></Input>
                </div>
                <div className='input-fields'>
                <button className='input-fields submit-btn' type='submit' onClick={()=>{loginHandler()}}>Login</button>
                </div>
                <div className='input-fields'>
                <Link to='/signup' style={{textDecoration:'none'}}>Click for Signup</Link>
                </div>
                </div>
          </div>
    </div>
  )
}
