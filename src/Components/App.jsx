import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import '../Css/App.css'; 

function App(){
    return(
        
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        
    );
}

export default App;