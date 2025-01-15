import { Routes, Route } from "react-router";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import Play from "./pages/Play";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";

const RickrollRedirect = () => {
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }, []);

  return null;
};

function App() {
  return (
    <div className="bgPattern min-h-dvh">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/play"
          element={
            <ProtectedRoute>
              <Play />
            </ProtectedRoute>
          }
        />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<RickrollRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
