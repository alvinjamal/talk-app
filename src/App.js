import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import ChatList from "./pages/Chat-List";
import Reset from "./pages/Reset-Pass";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="text-light" style={{ height: "50px" }}>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Forgot">Forgot</Link>
          <Link to="/Chat-List">Chat List</Link>
          <Link to="/Reset-Pass">Reset Password</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Home">Home</Link>
        </nav>
        <Routes>
          <Route path="/Register" element={<Register />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Forgot" element={<Forgot />} />

          <Route path="/Chat-List" element={<ChatList />} />

          <Route path="/Reset-Pass" element={<Reset />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
