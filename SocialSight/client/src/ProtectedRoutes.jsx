import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
   const isAuthenticated = localStorage.getItem('user');

   return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoutes;
