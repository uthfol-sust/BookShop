
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./compontents/NavBar";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/profilepage";
import Loginpage from "./pages/Loginpage"
import SignupPage from "./pages/SignupPage";
import Welcomepage from "./pages/Welcompage";
import { UserProvider } from "./Appwite/AuthProvider";

function App() {
  return (
    <UserProvider >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Profilepage" element={<Profilepage />} />
        </Routes>
      </Router>
    </UserProvider >
  );
}

export default App;
