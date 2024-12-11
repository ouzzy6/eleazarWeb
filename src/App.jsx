// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Mormon from "./components/mormon";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mormon" element={<Mormon />} />
                
            </Routes>
        </Router>
    );
}

export default App;
