import "./Header.css";
import { useAuth } from "../../contexts/AuthContext";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<any>();

    const { logout } = useAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoggedIn(true);
            }
            if (!user) {
                setLoggedIn(false);
            }
        });
    }, []);

    const handleLogoutClick = async (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        try {
            await logout();
            console.log("try");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="header">
            <h1 className="header__title">Flashcodes</h1>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">🔎</li>
                    <li className="header__li">
                        <a href="/">🏠</a>
                    </li>

                    {loggedIn && (
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                    )}

                    {!loggedIn && (
                        <>
                            <li className="header__li">
                                <Link to="/login" className="header__link">
                                    Login
                                </Link>
                            </li>
                            <li className="header__li">
                                <Link to="/signup" className="header__link">
                                    Sign up
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
