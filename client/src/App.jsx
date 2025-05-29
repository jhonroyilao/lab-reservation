import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/login/page"
import DashboardPage from "./pages/dashboard/page"
import LandingPage from "./pages/landing/page"
import SignUpPage from "./pages/signup/page"
import OnboardingPage from "./pages/onboarding/page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>
    </Router>
  )
}

export default App



