import "./Dashboard.css";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    return (
        <>
            Dashboard
            <button onClick={() => logout()}>Logout</button>
        </>
    );
};

export default Dashboard;
