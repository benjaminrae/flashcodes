import "./Dashboard.css";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);
    return (
        <>
            Dashboard
            <button onClick={() => logout()}>Logout</button>
        </>
    );
};

export default Dashboard;
