import "./ForgotPassword.css";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { resetPassword, currentUser } = useAuth();

    const navigate = useNavigate();

    const handleFormSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!email) {
            return setError("Enter an email");
        }

        try {
            setError("");
            setLoading(true);
            await resetPassword(email);
            setMessage("Check your email inbox to reset your password");
        } catch (error) {
            setError(`There was a problem logging in: ${error}`);
        }

        setLoading(false);
    };

    return (
        <div className="forgot-password">
            <form
                className="forgot-password__forgot-password-form"
                onSubmit={handleFormSubmit}
            >
                <h2 className="forgot-password-form__title">Reset password</h2>
                {error && (
                    <div className="forgot-password-form__error-container">
                        <p className="forgot-password-form__error-message">
                            {error}
                        </p>
                    </div>
                )}
                {message && (
                    <div className="forgot-password-form__message-container">
                        <p className="forgot-password-form__message-message">
                            {message}
                        </p>
                    </div>
                )}
                <div className="forgot-password-form__group">
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

                <input
                    className="forgot-password-form__submit"
                    type="submit"
                    value="Submit"
                    disabled={loading}
                />

                <Link to="/login" className="forgot-password-form__signup-link">
                    Login here when ready
                </Link>
            </form>
        </div>
    );
};

export default ForgotPassword;
