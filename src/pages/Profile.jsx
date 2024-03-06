import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileInfo from '../components/ProfilePage/ProfileInfo';
import axios from 'axios';
import useAxiosPublic from '../hooks/useAxiosPublic';
import BlogCard from '../components/shared/BlogCard';
import NavBar from '../components/shared/NavBar';

const Profile = () => {
    const { id } = useParams()

    const [userData, setUserData] = useState({})
    useEffect(() => {
        const fetchProfile = async () => {
            const res = await axios.get(`http://localhost:3000/profile/${id}`)
            if (res.status === 200) {
                console.log(res.data);
                setUserData(res.data)
            }
        }
        fetchProfile()
    }, [id])
    return (
        <div>
            <NavBar />
            <main className="mx-auto max-w-[1020px] py-8">
                <div className="container">
                    <ProfileInfo user={userData} />
                    <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
                    <div className="my-6 space-y-4">
                        {
                            userData?.blogs?.map(blog => <BlogCard blog={blog} key={blog.id} />)
                        }
                    </div>

                </div>
            </main>

        </div>
    );
};

export default Profile;