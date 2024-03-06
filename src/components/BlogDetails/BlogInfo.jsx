/* eslint-disable react/prop-types */
import React from 'react';
import { getFormatedDate } from '../../utilities/getDate';
import getImageUrl from '../../utilities/getImageUrl';
import getLetter from '../../utilities/getLetter';

const BlogInfo = ({ blog }) => {

    // console.log(blog);
    if (blog) return (
        <section>
            <div className="container text-center py-8">
                <h1 className="font-bold text-3xl md:text-5xl">
                    {blog?.title}
                </h1>
                <div className="flex justify-center items-center my-4 gap-4">
                    <div className="flex items-center capitalize space-x-2">
                        {
                            blog?.author?.avatar ? (<img className='avater-img' src={getImageUrl(blog?.author?.avatar, "avatar")} />) : (<div className="avater-img bg-indigo-600 text-white">
                                <span className="">{getLetter(blog?.author?.firstName)}</span>
                            </div>)
                        }
                        <h5 className="text-slate-500 text-sm">
                            {blog?.author?.firstName}{" "}{blog?.author?.lastName}
                        </h5>
                    </div>
                    <span className="text-sm text-slate-700 dot">{getFormatedDate(blog?.createdAt)}</span>
                    <span className="text-sm text-slate-700 dot">{blog?.likes?.length} Likes</span>
                </div>
                <img
                    className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
                    src={getImageUrl(blog?.thumbnail)}
                    alt=""
                />
                {/* Tags */}
                <ul className="tags">
                    {
                        // blog?.tags && blog?.tags?.split(",").map(tag => <li key={tag}>{tag}</li>)
                    }
                </ul>
                {/* Content */}
                <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
                    {blog?.content}
                </div>
            </div>
        </section>

    );
};

export default BlogInfo;