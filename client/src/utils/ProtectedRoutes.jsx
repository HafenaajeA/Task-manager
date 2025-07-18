import { Navigate } from 'react-router-dom';
import de from 'zod/v4/locales/de.cjs';

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" replace />;
}