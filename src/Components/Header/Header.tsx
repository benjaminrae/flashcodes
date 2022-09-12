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
            <h1 className="header__title">Flashcode</h1>
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
