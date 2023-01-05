import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {BrowserRouter,Routes,Route}    from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { PrivateRoute } from './pages/PrivateRoute';
import { PublicRoute } from './pages/PublicRoutes';
import {PageNotFound} from './pages/PageNotFound'
import { AddData } from './pages/AddData';
import { TimeVsTags } from './pages/TimeVsTags';
import { TimeVsDifficulty } from './pages/TimeVsDifficulty';
import {Toaster}  from 'react-hot-toast'
import { CustomHeader } from './components/CustomHeader';
import AuthContext from './context/LoggedInContext';
import { useState } from 'react';
import { isAuthenticated } from './helper/Auth';
function App() {

   const [LoggedIn,changeAuthState]=useState(isAuthenticated())
  return (
    <>
         <Toaster
  position="top-center"
  reverseOrder={false}
/>
         <AuthContext.Provider value={{LoggedIn:LoggedIn,updateAuth:changeAuthState}}>
         <BrowserRouter>
         <CustomHeader/>
            <Routes>
              <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}>
              </Route>
              <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}></Route>
              <Route path='/signup' element={<PublicRoute><Signup/></PublicRoute>}></Route>
              <Route path='*' element={<PageNotFound/>}></Route>
            </Routes>
         </BrowserRouter>
         </AuthContext.Provider>
    </>
  );
}

export default App;
