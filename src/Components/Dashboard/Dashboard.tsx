import "./Dashboard.css";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import New from "./components/New/New";
import Favourites from "./components/Favourites/Favourites";
import Featured from "./components/Featured/Featured";
import LogoutButton from "../LogoutButton/LogoutButton";
import Button from "../Button/Button";

// const DashboardFilter = () => {
//     return <div className="filter"></div>;
// };

const Dashboard = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!currentUser) {
    //         navigate("/login");
    //     }
    // }, [currentUser]);

    return (
        <div className="dashboard">
            <div className="dashboard__main-container">
                {currentUser && <Favourites />}
                <Featured />
                <New />
            </div>
            {/* <div className="dashboard__secondary-container">
                <DashboardFilter />
            </div> */}
        </div>
    );
};

export default Dashboard;
