import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
    const { currentUser } = useAuth();
    return (
        <header className="header">
            <h1 className="header__title">Flashcode</h1>
            {/* <nav className="header__nav">
                <ul className="header__ul">
                    {currentUser && (
                        <>
                            <li className="header__li">{currentUser.email}</li>
                            <li>Log Out</li>
                        </>
                    )}
                    {!currentUser && (
                        <>
                            <li className="header__li">
                                <a href="/login">Login</a>
                            </li>
                            <li className="header__li">
                                <a href="/signup">Sign up</a>
                            </li>
                        </>
                    )}
                </ul>
            </nav> */}
        </header>
    );
};

export default Header;
