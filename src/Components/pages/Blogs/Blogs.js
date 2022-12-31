import useBlogs from '../../../hooks/useBlogs'
import RouteLink from '../RouteLink/RouteLink'
import BlogsCard from './BlogsCard'

function Blogs() {
    const [blogs] = useBlogs()
  return (
    <div>
        <RouteLink pageName="Blogs" backRoute="Home" path="blogs"></RouteLink>
        <div className='container mx-auto py-16'>
            <h1 className='text-4xl font-bold text-gray-700 pb-4 mb-2 md:text-left text-center'>Feature Blogs</h1>
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