import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from './pages/admin/dashboard/Dashboard'
import Login from './pages/adminAuth/adminAuth';
import AddProduct from './pages/admin/page/AddProduct'
import UpdateProduct from './pages/admin/page/UpdateProduct'
import { ToastContainer } from 'react-toastify';
import MyState from './context/data/mystate';

function App() {
      const ProtectedRouteForAdmin = ({children})=> {
  const admin =  localStorage.getItem("isAdminUserFF")
  
  if(admin === 'yes'){
    return children
  }
  else{
    return <Navigate to={'/'}/>
  }

}

  return (
    <>
        <MyState>

      <Router>
        <Routes>
       

          
          <Route path="/dashboard" element={ <ProtectedRouteForAdmin> <Dashboard/>  </ProtectedRouteForAdmin>} />
          <Route path='/' element={<Login/>} />
          <Route path='/addproduct' element={
          <ProtectedRouteForAdmin> <AddProduct/> </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
        <ProtectedRouteForAdmin> <UpdateProduct/> </ProtectedRouteForAdmin>
             
          } />
        </Routes>
        <ToastContainer/>
      </Router>
      </MyState>
    </>
  )

}

export default App
