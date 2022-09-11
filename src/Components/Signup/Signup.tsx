import "./Signup.css";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="signup">
            <form className="signup__signup-form" action="submit">
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
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
};

export default Signup;
