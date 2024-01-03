import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { authInfo } = useSelector((state) => state.auth);
 
  return authInfo && authInfo.user.role_id === 17 ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace />
  );
};
export default AdminRoute;