import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Dashboard } from '../pages/Home'
import { ProtectedRoutes } from '../components/ProtectedRoutes'

export const RoutesMain = () => {
    const [user, setUser] = useState(null)
    return (
        <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard/:userId" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}