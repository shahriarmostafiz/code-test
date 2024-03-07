import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogInfo from '../components/BlogDetails/BlogInfo';
import Comments from '../components/BlogDetails/Comments';
import FloatingAction from '../components/BlogDetails/FloatingAction';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { getToken, getUser } from '../utilities/authDetails';
import useAxiosSecure from '../hooks/useAxiosSecure';
import myFetch from '../hooks/useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const { auth } = useAuth()
    const [singleBlog, setSingleBlog] = useState()
    const [loading, setLoading] = useState(true)
    const { api } = useAxiosSecure()
    const user = auth?.user || getUser() || null
    const myToken = getToken()
    // const [isFavourite, setIsFavourite] = useState(singleBlog?.isFavourite || false)

    useEffect(() => {
        // setLoading(true)
        const fetchBlog = async () => {
            const res = await axios.get(`http://localhost:3000/blogs/${id}`)
            if (res.status === 200) {
                setLoading((prev) => false)
                console.log(res.data);
                setSingleBlog(res.data)
            }
        }
        fetchBlog()
    }, [id])

    const handleLike = async () => {
        console.log(singleBlog?.id, "will be liked soon ");
    }




    const handleFavourite = async () => {
        if (!user) {
            return alert("please login to add favourites ")
        }
        console.log(singleBlog?.id, "will be favourite soon ");

        try {
            const resData = await myFetch(`http://localhost:3000/blogs/${id}/favourite`, "PATCH")
            // const res = await api.patch(`http://localhost:3000/blogs/${id}/favourite`)
            console.log(resData);
            // if (res.status === 200) {
            //     setSingleBlog({ ...singleBlog, isFavourite: !singleBlog.isFavourite })
            // }
        } catch (error) {
            console.log(error);
        }
        // try {
        //     const res = await fetch(`http://localhost:3000/blogs/${id}/favourite`, {
        //         method: 'PATCH',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': `Bearer ${myToken}`
        //         },

        //     });
        //     console.log("res", res);

        // } catch (error) {
        //     console.log("error", error);
        // }

        // setSingleBlog({ ...singleBlog, isFavourite: true })

    }
    if (loading) return <h1>loading </h1>

    return (
        <>
            <main>
                <BlogInfo blog={singleBlog} />
                <Comments />
            </main>
            <FloatingAction handleLike={handleLike} toggleFavourite={handleFavourite} comments={singleBlog?.comments?.length} likes={singleBlog?.likes?.length ?? 0} isFavourite={singleBlog?.isFavourite ?? false} />
        </>
    );
};

export default BlogDetails;