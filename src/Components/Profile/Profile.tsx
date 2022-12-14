import "./Profile.css";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import { json } from "stream/consumers";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser]);

    if (!currentUser) {
        return <></>;
    }
    return (
        <div className="profile">
            <div className="profile__card">
                <h2 className="profile__title">My Profile</h2>
                <div className="profile__group">
                    <h3 className="profile__subtitle">Name:</h3>
                    <div>{currentUser.name}</div>
                </div>
                <div className="profile__group">
                    <h3 className="profile__subtitle">Email:</h3>
                    <div>{currentUser.email}</div>
                </div>
                <div className="profile__button-container">
                    <button>Update Profile</button>
                    <LogoutButton />
                </div>
            </div>
            <div className="profile__sets">
                <div className="profile__title">My Sets</div>
            </div>
        </div>
    );
};

export default Profile;
