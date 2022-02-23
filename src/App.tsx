import * as React from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";



const App: React.FC = () => {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
        
      </>
    );
  
};

export default App;
