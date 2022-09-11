import "./Login.css";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login, currentUser } = useAuth();

    const navigate = useNavigate();

    if (currentUser) {
        console.log(currentUser);
        navigate("/");
    }
    const handleFormSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!email) {
            return setError("Enter an email");
        }
        if (!password) {
            return setError("Enter a password");
        }
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (error) {
            setError(`There was a problem logging in: ${error}`);
        }
        if (currentUser) {
            console.log(currentUser);
            navigate("/");
        }
        // if (!currentUser) {
        //     setError("There was a problem logging in");
        // }
        setLoading(false);
    };

    return (
        <div className="login">
            <form className="login__login-form" onSubmit={handleFormSubmit}>
                <h2 className="login-form__title">Log in to Flashcode</h2>
                {error && (
                    <div className="login-form__error-container">
                        <p className="login-form__error-message">{error}</p>
                    </div>
                )}
                <div className="login-form__group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    ></input>
                </div>
                <div className="login-form__group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    ></input>
                </div>

                <input
                    className="login-form__submit"
                    type="submit"
                    value="login"
                    disabled={loading}
                />
                <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="login-form__signup-link">
                        Sign up here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
