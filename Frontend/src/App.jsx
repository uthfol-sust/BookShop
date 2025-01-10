import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./compontents/NavBar";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/profilepage";
import Loginpage from "./pages/Loginpage"
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Profilepage" element={<Profilepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
