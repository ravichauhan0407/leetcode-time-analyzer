import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import UserDataContext from '../context/UserDataContext'
import {Drawer} from 'antd'
import { AddData } from './AddData'
import { Graph } from './Graph'
import { GraphData } from '../helper/GraphData'
export const Home = () => {
  const [userdata,updateUserData]=useState([])
  const [defaultdata,updateDefaultdata]=useState([])
  const location=useLocation() 
  
  const [openRightDrawer,setOpenDrawer]=useState(false)
  
  const changeDrawer=()=>
  {
       setOpenDrawer(!openRightDrawer)
  }
  const OncloseDrawer=()=>
  {
      setOpenDrawer(false)
  }
  const navigate=useNavigate()

  const  resetGraph=()=>
  {
         updateUserData(defaultdata)
  }
  
 const getUpdatedUserData=()=>
 {
     
     axios.get(`http://localhost:8000/api/get-data`,{
      headers:{
        'authorization':'Bearer'+' '+localStorage.getItem('jwt')
      }
    }).then((res)=>{
           if(res.data.status)
           {
              res.data.userdata.reverse()
              let graphdata=(GraphData(res.data.userdata))
              updateUserData(graphdata)
              updateDefaultdata(graphdata)
           }
           else
           {
               toast.error('Something went wrong')
           }
    })
    .catch((err)=>
    {
       toast.error('Somethign went wrong')   
    })
  }

 
 useEffect(()=>
 {
     getUpdatedUserData()
 },[])

  return (
    <>
    <UserDataContext.Provider value={{userdata:userdata,getUpdatedUserData:getUpdatedUserData}}>
   <Drawer
        title="Keep Coding,Keep Learning"
        placement='left'
        width={450}
        onClose={OncloseDrawer}
        open={openRightDrawer}
      >
        <AddData/>
      </Drawer>
    <div  style={{marginTop:'70px'}}>
    <Graph userdata={userdata} openDrawer={changeDrawer} updateData={updateUserData} resetGraph={resetGraph}/> 
    </div>
    </UserDataContext.Provider>
    </>
  )
}
