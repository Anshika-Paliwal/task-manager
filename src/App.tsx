import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, Login } from "./pages/index";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
