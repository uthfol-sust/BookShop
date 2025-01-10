import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./compontents/NavBar";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/profilepage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />,
          <Route path="/Profilepage" element={<Profilepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
