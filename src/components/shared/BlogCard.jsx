/* eslint-disable react/prop-types */
import DotsIcons from "../../assets/icons/3dots.svg"
import EditIcons from "../../assets/icons/edit.svg"
import DeleteIcon from "../../assets/icons/delete.svg"
import getLetter from "../../utilities/getLetter";
import { getFormatedDate } from "../../utilities/getDate";
import { useState } from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../../utilities/getImageUrl";
const BlogCard = ({ blog }) => {
    const imageUrl = getImageUrl(blog?.thumbnail)
    const avatarUrl = getImageUrl(blog?.author?.avatar, "avatar")
    const [showActions, setShowActions] = useState(false)
    return (
        <div className="blog-card">
            <img className="blog-thumb" src={imageUrl} alt="" />
            <div className="mt-2 relative">
                <a href="./single-blog.html"></a>
                <h3 className="text-slate-300 text-xl lg:text-2xl">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="mb-6 text-base text-slate-500 mt-1">
                    {blog.content}
                </p>
                {/* Meta Informations */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center capitalize space-x-2">
                        {blog?.author?.avatar ? <img className='avater-img' src={avatarUrl} /> : (<div className="avater-img bg-indigo-600 text-white">
                            <span className="">{getLetter(blog?.author?.firstName)}</span>
                        </div>)}
                        <div>
                            <h5 className="text-slate-500 text-sm">
                                <Link to={`/user/${blog?.author?.id}`}>{blog?.author?.firstName} {" "}{blog?.author?.lastName}</Link>
                            </h5>
                            <div className="flex items-center text-xs text-slate-700">
                                <span>{getFormatedDate(blog?.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm px-2 py-1 text-slate-700">
                        <span>{blog?.likes.length} Likes</span>
                    </div>
                </div>
                {/* action dot */}
                <div className="absolute right-0 top-0">
                    <button onClick={() => setShowActions(prev => !prev)}>
                        <img src={DotsIcons} alt="3dots of Action" />
                    </button>
                    {/* Action Menus Popup */}
                    {
                        showActions && (<div className="action-modal-container">
                            <button className="action-menu-item hover:text-lwsGreen">
                                <img src={EditIcons} alt="Edit" />
                                Edit
                            </button>
                            <button className="action-menu-item hover:text-red-500">
                                <img src={DeleteIcon} alt="Delete" />
                                Delete
                            </button>
                        </div>)
                    }
                </div>
                {/* action dot ends */}
            </div>
        </div>

    );
};

export default BlogCard;