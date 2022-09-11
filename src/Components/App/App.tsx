import React from "react";
import Signup from "../Signup/Signup";
import Header from "../Header/Header";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__main-container">
                <Signup />
            </div>
        </div>
    );
}

export default App;
