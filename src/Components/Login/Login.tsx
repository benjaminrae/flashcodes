import "./Login.css";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // @ts-ignore
    const { login, currentUser } = useAuth();

    const handleFormSubmit = async (event: React.SyntheticEvent) => {
        console.log(event);
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
            login(email, password);
        } catch {
            setError("There was a problem logging in");
        }
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
                {currentUser && currentUser.email}
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
                    <a href="/signup" className="login-form__signup-link">
                        Sign up here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
