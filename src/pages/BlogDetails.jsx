import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogInfo from '../components/BlogDetails/BlogInfo';
import Comments from '../components/BlogDetails/Comments';
import FloatingAction from '../components/BlogDetails/FloatingAction';
import axios from 'axios';

const BlogDetails = () => {
    const { id } = useParams()
    const [singleBlog, setSingleBlog] = useState()
    const [loading, setLoading] = useState(true)
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
        console.log(singleBlog?.id, "will be favourite soon ");
        setSingleBlog({ ...singleBlog, isFavourite: true })

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