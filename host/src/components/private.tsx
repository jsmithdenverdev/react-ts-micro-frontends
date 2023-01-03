import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export default function Private({ children }: any) {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? children : <Navigate to="/" />;
}
