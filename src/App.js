import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./app.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import ChatList from "./pages/Chat";
import Reset from "./pages/Reset-Pass";
import Profile from "./pages/Profile";
import Group from "./pages/Group";
import Otp from "./pages/Verif-Otp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} replace="true" />

          <Route path="/Register" element={<Register />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Forgot" element={<Forgot />} />

          <Route path="/Chat-List" element={<ChatList />} />

          <Route path="/Reset-Pass" element={<Reset />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/Group" element={<Group />} />

          <Route path="/Verif-Otp" element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
