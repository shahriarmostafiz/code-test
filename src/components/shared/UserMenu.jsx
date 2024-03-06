/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from "../../assets/icons/search.svg"
import getImageUrl from '../../utilities/getImageUrl';
import getLetter from '../../utilities/getLetter';


const UserMenu = ({ user, onLogOut }) => {
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
                    href="./search.html"
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <img src={searchIcon} alt="Search" />
                    <span>Search</span>
                </Link>
            </li>
            <li>
                <button
                    onClick={onLogOut}
                    className="text-white/50 hover:text-white transition-all duration-200"
                >
                    {" "}
                    Logout{" "}
                </button>
            </li>
            <li className="flex items-center">
                {/* Circular Div with background color */}
                {
                    user?.avatar ? (<img className='avater-img' src={getImageUrl(user?.avatar, "avatar")} />) : (<div className="avater-img bg-orange-600 text-white">
                        <span className="">{getLetter(user?.firstName)}</span>
                        {/* User's first name initial */}
                    </div >)
                }
                {/* Logged-in user's name */}
                <span className="text-white ml-2">{user?.firstName} {" "} {user?.lastName}</span>
                {/* Profile Image */}
            </li></>
    );
};

export default UserMenu;