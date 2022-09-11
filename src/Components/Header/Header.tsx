import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const { currentUser, logout } = useAuth();
    console.log(currentUser);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedIn(true);
        });
        return unsubscribe;
    }, []);

    return (
        <header className="header">
            <h1 className="header__title">Flashcode</h1>
            <nav className="header__nav">
                <ul className="header__ul">
                    {loggedIn && (
                        <>
                            <li className="header__li">{currentUser.email}</li>
                            <li
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Log Out
                            </li>
                        </>
                    )}
                    {!loggedIn && (
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
            </nav>
        </header>
    );
};

export default Header;
