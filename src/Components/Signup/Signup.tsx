import "./Signup.css";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="signup">
            <form className="signup__signup-form" action="submit">
                <h2 className="signup-form__title">Join Flashcode</h2>
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
                />
                <p>
                    Already have an account?{" "}
                    <a href="" className="signup-form__login-link">
                        Log in here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
