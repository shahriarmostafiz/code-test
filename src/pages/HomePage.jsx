import { useEffect, useRef, useState } from 'react';

import useAxiosPublic from '../hooks/useAxiosPublic';
import BlogCard from '../components/shared/BlogCard';
import axios from 'axios';

const HomePage = () => {
    const { axiosPublic } = useAxiosPublic()
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const loaderRef = useRef(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // setLoading(true)
        const fetchBlogs = async () => {

            const res = await axios.get(`http://localhost:3000/blogs?limit=5&page=${page}`)
            const myData = await res.data.blogs
            if (res.data.blogs.length === 0) {
                setHasMore(false)
            } else {
                // setLoading(false)
                setData(prev => [...prev, ...myData])
                setPage(prev => prev + 1)
            }
        }
        const observing = (items) => {
            const item = items[0]
            // main logic for loading when the intersection api is observing 
            if (item.isIntersecting && hasMore) {
                fetchBlogs()
            }
            else {
                console.log("loader is not visible");
            }
        }
        const observer = new IntersectionObserver(observing)
        // logic for setting up the observer div 
        if (observer && loaderRef.current) {

            observer.observe(loaderRef.current)

        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [page, hasMore])

    // if (loading) {
    //     return <h1>loading posts ...</h1>
    // }
    // if (state.error) {
    //     return <h1>Something went wrong </h1>
    // }
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    <div className="space-y-3 md:col-span-5">
                        {
                            data?.map(blog => <BlogCard key={blog?.id} blog={blog} idx={blog.id} />)
                        }
                    </div>
                </div>
            </div>
            {
                hasMore ? <div ref={loaderRef}> loading</div> : <div>all blogs loaded</div>
            }
        </section>
    );
};

export default HomePage;