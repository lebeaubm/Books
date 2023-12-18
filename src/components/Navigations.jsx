import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Navigations = ({ user }) => {
    const location = useLocation();


    //The Links are highlighed
    return (
        <nav>
            <Link to="/books" className={`nav-link ${location.pathname === '/books' ? 'active' : ''}`}>Books</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            {// To about page.
            }

            {
                user.email ? (
                    <Link to="/account" className={`nav-link ${location.pathname === '/account' ? 'active' : ''}`}>User </Link>

                ) : (

                    <span>
                        <Link to="/login" className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>

                        <Link to="/register" className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link>

                    </span>
                )
            }
        </nav>
    )
}

export default Navigations