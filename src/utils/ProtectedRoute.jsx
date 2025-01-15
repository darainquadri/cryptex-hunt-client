import { Navigate } from "react-router";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
