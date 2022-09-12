import "./App.css";
import React from "react";
import Signup from "../Signup/Signup";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import Profile from "../Profile/Profile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import NewSet from "../NewSet/NewSet";
import Game from "../Game/Game";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__main-container">
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/new-set" element={<NewSet />} />
                            <Route path="/game" element={<Game />} />

                            <Route element={<PrivateRoute />}>
                                <Route element={<Profile />} path="/profile" />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route
                                    element={<UpdateProfile />}
                                    path="/update-profile"
                                />
                            </Route>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                element={<ForgotPassword />}
                                path="/forgot-password"
                            />
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
        </div>
    );
}

export default App;
