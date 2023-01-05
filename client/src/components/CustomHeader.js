import { Layout, Menu } from 'antd';
import React, { useContext } from 'react'
import { MenuOutlined } from '@ant-design/icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../context/LoggedInContext';
const {Header} =Layout
export const CustomHeader = () => {
  const context=useContext(AuthContext)
  const navigate=useNavigate()
  const Signout = () => {
    localStorage.removeItem('jwt')
    context.updateAuth(false)
    navigate('/login')
  }

  return (
    <>
     <Layout>
      <Header  className='header' style={{backgroundColor:'#00d09c',position:'fixed'}}>
        <div className='logo'><Link to='/'style={{textDecoration:'none',color:'white'}} >Leetcode Time Analyzer</Link></div>
        <Menu expandIcon={<MenuOutlined/>} className='menu' style={{ display: 'block',backgroundColor:'#00d09c' }} mode='horizontal' >
          {!context.LoggedIn&&<Menu.Item  className='menu-item' style={{float:'right',fontSize:'bold'}} key='1'><Link to='/login'>LogIn</Link></Menu.Item>}
          {!context.LoggedIn&&<Menu.Item  className='menu-item' style={{float:'right',fontSize:'bold'}} key='2'><Link to='/signup'>SignUp</Link></Menu.Item>}
          {context.LoggedIn&&<Menu.Item  className='menu-item' style={{float:'right',fontSize:'bold'}} key='2'><div onClick={()=>{Signout()}}>SignOut</div></Menu.Item>}
        </Menu>
      </Header>
     </Layout>
    </>
  )
}
