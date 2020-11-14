import React, { useEffect } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromURL } from "./spotify";

function App() {

    useEffect(() => {
        const token = getTokenFromURL();
        console.log("this is my token:", token);
    }, []);
    
    return (

        <div className="app">
        
        <Login />

        </div>

    );
}

export default App;