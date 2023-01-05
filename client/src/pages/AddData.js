import React, { useContext, useRef, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import tagsdata from '../tagsdata'
import toast from 'react-hot-toast'
import axios from 'axios'
import { ConvertToList } from '../helper/ConvertToList'
import UserDataContext from '../context/UserDataContext'
const difficulties=[{key:'Easy',value:'Easy',text:'Easy'},{key:'Medium',value:'Medium',text:'Medium'},{key:'Hard',value:'Hard',text:'Hard'}]

export const AddData = () => {
  const usercontext=useContext(UserDataContext)
  const  [taglist,setTaglist]=useState([])
  const [difficulty,setDifficulty]=useState('')
  const timeref=useRef()

    const handleTagChange = (e,{value}) => {
       if(value.length<=10)
       {
            setTaglist(value)
        
       }
       else
       {
           toast.error(`you can only add upto 10 tags`)
       }
  }

  const sendUserData=(data)=>
  {
      return  axios.post('http://localhost:8000/api/add-data',data,{
        headers:
        {
           'Authorization':'Bearer'+' '+localStorage.getItem('jwt')
        }
      }).then((res)=>
        {
           return  res.data
        }).catch((err)=>
        {
              console.log(err)
              return {status:false}
        })
  }

  const handleDifficultyChange=(e,{value})=>
  {
      setDifficulty(value)
  }

  const submitHandler=()=>
  {
       if(taglist.length===0)
       {
            toast.error('Please Entre Tags')
       }
       else if(difficulty==='')
      {
        toast.error('Please Enter Difficulty')
      }
      else if(timeref.current.value>500||timeref.current.value<1)
      {
            toast.error('Enter valid Time')
      }
      else
      {
          const dataTobeAdded=ConvertToList(taglist,difficulty,timeref.current.value)
          console.log(dataTobeAdded)
          sendUserData(dataTobeAdded).then((res)=>
          {
              if(res.status)
              {
                  toast.success('Data Added Succesfully')
                  usercontext.getUpdatedUserData()
                  timeref.current.value=''
                  setTaglist([])
                  setDifficulty('')

              }
              else
              {
                     toast.error('Somethig Went Wrong')
              }
          })
 
           
      }
  }
  return (
    <>
      <div className='input-grid'>
     
      <form onSubmit={(e)=>{
        e.preventDefault()
        submitHandler()
        }}>
       <div>Tags:</div>
      <div className='input-fields' style={{marginBottom:'50px'}}><Dropdown placeholder='Tags' fluid multiple search selection options={tagsdata}  value={taglist}  onChange={handleTagChange}/></div>
      <div>Difficulty:</div>
      <div className='input-fields'><Dropdown placeholder='Difficulty' fluid  selection options={difficulties} value={difficulty} onChange={handleDifficultyChange}/></div>
      <div className='input-fields'>
        <div style={{marginBottom:'10px'}}>Time(Minutes):</div>
        <input required={true} ref={timeref} className='time-input' type="number" min="1" max='500' maxLength={3}></input></div>
      <div className='input-fields'><button className='time-input' type="submit"  style={{backgroundColor:'#00d09c'}}>Save</button></div>
      </form>
      </div>
    </>
  )
}
