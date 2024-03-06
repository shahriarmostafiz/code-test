import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UserFavourites = () => {
    const [favouriteData, setFavouriteData] = useState()
    const { auth } = useAuth()
    const { api } = useAxiosSecure()
    console.log("this app was opened");
    useEffect(() => {
        const fetchFavourites = async () => {
            const res = await api.get("http://localhost:3000/blogs/favourites")
            if (res.status === 200) {
                console.log(res.data);
                setFavouriteData(res.data)
            }
        }
        fetchFavourites()
    }, [])
    return (
        <div className="sidebar-card">
            <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                Your Favourites ❤️
            </h3>

            <ul className="space-y-5 my-5">
                {
                    favouriteData.length && favouriteData?.map(favourite => <li key={favourite?.id}>
                        <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                            How to Auto Deploy a Next.js App on Ubuntu from GitHub
                        </h3>
                        <p className="text-slate-600 text-sm">#tailwindcss, #server, #ubuntu</p>
                    </li>
                    )

                }
            </ul>
        </div>

    );
};

export default UserFavourites;