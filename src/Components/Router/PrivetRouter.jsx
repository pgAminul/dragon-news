import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Provider/AuthContext";
import Loading from "../Pages/Loading";
export default function PrivetRouter({ children }) {
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return <Loading />;
  }
  const location = useLocation();
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}
