import React from 'react'
import { Navigate } from 'react-router-dom'


export const PublicRoute = ({children}) => {

  const jwt=localStorage.getItem('jwt')

  return ((!jwt)?children:<Navigate to='/'/>)
}
