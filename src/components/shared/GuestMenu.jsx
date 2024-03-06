import React from 'react';
import { Link } from 'react-router-dom';

const GuestMenu = () => {
    return (
        <>
            <li>
                <Link
                    href="./createBlog.html"
                    className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                    Write
                </Link>
            </li>
            <li>
                <Link
                    to={"/login"}
                    className="text-white/50 hover:text-white transition-all duration-200"
                >
                    {" "}
                    Login{" "}
                </Link>
            </li>
        </>
    );
};

export default GuestMenu;