import "./Signup.css";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // @ts-ignore
    const { signup, currentUser } = useAuth();

    const navigate = useNavigate();

    const handleFormSubmit = async (event: React.SyntheticEvent) => {
        console.log(event);
        event.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }
        try {
            setError("");
            setLoading(true);
            await signup(email, password);
            navigate("/");
        } catch {
            setError("There was a problem signing up");
        }
        setLoading(false);
    };

    return (
        <div className="signup">
            <form className="signup__signup-form" onSubmit={handleFormSubmit}>
                <h2 className="signup-form__title">Join Flashcodes</h2>
                {error && (
                    <div className="signup-form__error-container">
                        <p className="signup-form__error-message">{error}</p>
                    </div>
                )}
                <div className="signup-form__group">
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
                <div className="signup-form__group">
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
                <div className="signup-form__group">
                    <label htmlFor="confirm-password">Confirm password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    ></input>
                </div>
                <input
                    className="signup-form__submit"
                    type="submit"
                    value="Signup"
                    disabled={loading}
                />
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="signup-form__login-link">
                        Log in here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
