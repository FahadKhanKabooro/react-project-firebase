import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Offers from "./components/Offers";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<Signup />} />
        <Route path="/Forgot-password" element={<ForgotPassword />} />
        <Route path="/Offers" element={<Offers />} />
      </Routes>
    </>
  );
}

export default App;
