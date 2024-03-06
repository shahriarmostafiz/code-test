import logoIcon from "../../assets/logo.svg"
import searchIcon from "../../assets/icons/search.svg"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import UserMenu from "./UserMenu";
import GuestMenu from "./GuestMenu";
const NavBar = () => {
    const { auth, setAuth } = useAuth()

    const logout = () => {
        setAuth({})
    }
    return (
        <header>


            <nav className="container">
                {/* Logo */}
                <div>
                    <Link to={"/"}>
                        <img className="w-32" src={logoIcon} alt="lws" />
                    </Link>
                </div>
                {/* Actions - Login, Write, Home, Search */}
                {/* Notes for Developers */}
                {/* For Logged in User - Write, Profile, Logout Menu */}
                {/* For Not Logged in User - Login Menu */}
                <div>
                    <ul className="flex items-center space-x-5">
                        {
                            auth?.user ? (<UserMenu onLogOut={logout} user={auth?.user} />) : (<GuestMenu />)
                        }
                    </ul>
                </div>
            </nav>
        </header>

    );
};

export default NavBar;