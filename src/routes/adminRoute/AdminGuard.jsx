import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AdminGuard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  if (user?.isSuspend) {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return user?.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace/>
  );
};

export default AdminGuard;