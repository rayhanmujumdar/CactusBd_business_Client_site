import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col gap-y-5 justify-center items-center h-[92vh]'>
        <h1 className='text-6xl font-extrabold text-gray-600'>404</h1>
        <p className='text-3xl font-bold text-gray-500'>Page Not found</p>
        <Link to='/' className='btn'>Go to home</Link>
    </div>
  )
}

export default NotFound