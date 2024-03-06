import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Popular = () => {
    const [popularData, setPopularDala] = useState([])
    useEffect(() => {
        const fetchPopular = async () => {
            const res = await axios.get("http://localhost:3000/blogs/popular")
            const data = await res.data.blogs
            setPopularDala([...data])
        }
        fetchPopular()
    }, [])
    console.log(popularData);
    return (
        //    < !--popular -- >
        <div className="sidebar-card">
            <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                Most Popular 👍️
            </h3>

            <ul className="space-y-5 my-5">
                {
                    popularData?.map(popularBlog => (<li key={popularBlog.id}>
                        <h3
                            className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
                        >
                            {popularBlog?.title}
                        </h3>
                        <p className="text-slate-600 text-sm">
                            by
                            <Link to={`/user/${popularBlog?.author?.id}`}>{" "}{popularBlog?.author?.firstName} {" "} {popularBlog?.author?.lastName} </Link>
                            <span>·</span> {popularBlog?.likes.length} Likes
                        </p>
                    </li>))
                }
            </ul>
        </div>

    );
};

export default Popular;