import axios from "axios"
import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs,setBlogs] = useState(null)
    useEffect(() => {
        (async () => {
            const blogData = await axios.get('blog.data.json')
            setBlogs(blogData.data)
        })()
    },[])
    return [blogs,setBlogs]
}

export default useBlogs