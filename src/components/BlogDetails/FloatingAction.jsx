import likeIcon from "../../assets/icons/like.svg"
import heartIcon from "../../assets/icons/heart.svg"
import heartFillIcon from "../../assets/icons/heart-filled.svg"
import commentIcon from "../../assets/icons/comment.svg"

const FloatingAction = ({ handleLike, toggleFavourite, isFavourite, likes, comments }) => {

    return (
        <div className="floating-action">
            <ul className="floating-action-menus">
                <li onClick={handleLike}>
                    <img src={likeIcon} alt="like" />
                    <span>{likes}</span>
                </li>
                <li onClick={toggleFavourite}>
                    {/* There is heart-filled.svg in the icons folder */}
                    <img src={isFavourite ? heartFillIcon : heartIcon} alt="Favourite" />
                </li>
                <a href="#comments">
                    <li>
                        <img src={commentIcon} alt="Comments" />
                        <span>{comments}</span>
                    </li>
                </a>
            </ul>
        </div>

    );
};

export default FloatingAction;