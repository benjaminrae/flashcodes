import { useAuth } from "../../contexts/AuthContext";

const LogoutButton = () => {
    const { logout } = useAuth();
    return (
        <button
            onClick={() => {
                logout();
            }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
