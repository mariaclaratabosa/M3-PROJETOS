import { Navigate, Route, Routes } from "react-router-dom"
import { ProtectedRoutesPublic } from "../components/ProtectedRoutes/ProtectedRoutesPublic"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { ProtectedRoutesPrivate } from "../components/ProtectedRoutes/ProtectedRoutesPrivate"
import { DashboardPage } from "../pages/Dashboard"
import { LearnMore } from "../pages/LearnMore"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutesPublic />}>
        <Route index element={<Navigate to="/login" />} />
      </Route>
      <Route path="/login" element={<ProtectedRoutesPublic />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path="/register" element={<ProtectedRoutesPublic />}>
        <Route index element={<RegisterPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoutesPrivate />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="/saibaMais/:name" element={<ProtectedRoutesPrivate />}>
        <Route index element={<LearnMore />} />
      </Route>
    </Routes>
  )
}
