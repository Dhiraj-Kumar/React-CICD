import { useEffect, useState } from 'react'
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const [isAuthenticated, setIsAuthenticated] = useState<any>(null);
    useEffect(() => {
        fetch('http://localhost:9000/auth/isAuthenticated', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => setIsAuthenticated(data.isAuthenticated))
            .catch((_) => setIsAuthenticated(false));
    }, [])

    if (isAuthenticated == null) {
        return <div></div>
    } else {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    }
}
