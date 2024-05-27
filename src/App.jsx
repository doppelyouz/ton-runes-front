import { useState, useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import FirstPage from "./pages/FirstPage";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GeneralPage from "./pages/GeneralPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-modern-drawer/dist/index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <FirstPage />}
      <Routes>
        <Route path="/" element={<GeneralPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
