import "./Dashboard.css";
import { useAuth } from "../../contexts/AuthContext";
import New from "./components/New/New";
import Favourites from "./components/Favourites/Favourites";
import Featured from "./components/Featured/Featured";

const DashboardFilter = () => {
    return <div className="filter"></div>;
};

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);
    return (
        <div className="dashboard">
            <div className="dashboard__main-container">
                <Featured />
                {currentUser && <Favourites />}
                <New />
            </div>
            <div className="dashboard__secondary-container">
                <DashboardFilter />
            </div>
        </div>
    );
};

export default Dashboard;
