import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import BlogDetails from '../pages/BlogDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/:id' element={<BlogDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/blogs/search' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers