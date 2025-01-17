import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MapPage } from "./pages/MapPage";
import { Members } from "./pages/Members";
import { Organizations } from "./pages/Organizations";
import { Projects } from "./pages/Projects";
import { Register } from "./pages/register";
import { ThankYou } from "./pages/register/await";
import { Registration } from "./pages/self-register";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/self-register" element={<Registration />} />
          <Route path="/obrigado" element={<ThankYou />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navbar />
                  <main className="max-w-7xl mx-auto px-4 py-8">
                    <Home />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/members"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navbar />
                  <main className="max-w-7xl mx-auto px-4 py-8">
                    <Members />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/organizations"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navbar />
                  <main className="max-w-7xl mx-auto px-4 py-8">
                    <Organizations />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navbar />
                  <main className="max-w-7xl mx-auto px-4 py-8">
                    <Projects />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <div className="min-h-screen bg-gray-50">
                  <Navbar />
                  <main className="max-w-7xl mx-auto px-4 py-8">
                    <MapPage />
                  </main>
                </div>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
