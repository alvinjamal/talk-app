import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{ height: "50px" }}>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Forgot">Forgot</Link>
        </nav>

        <Routes>
          <Route path="/Register" element={<Register />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
