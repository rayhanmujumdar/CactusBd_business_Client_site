import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RouteLink from '../RouteLink/RouteLink'
import BlogsCard from './BlogsCard'

function Blogs() {
    const [blogs,setBlogs] = useState(null)
    useEffect(() => {
        (async () => {
            const blogData = await axios.get('blog.data.json')
            setBlogs(blogData.data)
        })()
    },[])
    console.log(blogs)
  return (
    <div>
        <RouteLink pageName="Blogs" backRoute="Home" path="blogs"></RouteLink>
        <div className='container mx-auto py-16'>
            <h1 className='text-4xl font-bold text-gray-700 pb-4 mb-2'>Feature Blogs</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 
     justify-items-center'>
            {
                blogs?.map(blog => <BlogsCard blog={blog}></BlogsCard>)
            }
        </div>
        </div>
    </div>
  )
}

export default Blogs