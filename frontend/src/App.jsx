import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import ProtectedRoute from "./components/ProtectedRoute"
import Login from './pages/Login'
import NotFound from  './pages/NotFound'

const logout = () => {
  localStorage.clear()
  return <Navigate  to='/login'/>
}

const registerAndLogout = () => {
  localStorage.clear()
  return <Register />
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
         path='/' 
         element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>

        <Route  path='/login' element={<Login />}/>
        <Route  path='/logout' element={<logout />}/>
        <Route  path='/register' element={<Register />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App