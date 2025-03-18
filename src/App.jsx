// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Mormon from "./components/mormon";
import Endless from "./components/endlessstairs";
import Redrum from "./components/redrum";
import Cortos from "./components/cortos";
import Jungle from "./components/jungle";
import Panda from "./components/panda";
import Danza from "./components/danza";
import Motion from "./components/motion";
import Surarquia2 from "./components/surarquia2";
import Surarquia from "./components/surarquia";
import Dollhouse from "./components/dollhouse";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mormon" element={<Mormon />} />
                <Route path="/endlessstairs" element={<Endless />} />
                <Route path="/redrum" element={<Redrum />} />
                <Route path="/cortos" element={<Cortos />} />
                <Route path="/jungle" element={<Jungle />} />
                <Route path="/panda" element={<Panda />} />
                <Route path="/danza" element={<Danza />} />
                <Route path="/motion" element={<Motion />} />
                <Route path="/surarquia2" element={<Surarquia2 />} />
                <Route path="/surarquia" element={<Surarquia />} />
                <Route path="/dollhouse" element={<Dollhouse />} />
            </Routes>
        </Router>
    );
}

export default App;
