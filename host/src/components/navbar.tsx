import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavItem = ({ children }: any) => (
  <li
    style={{
      margin: "0px 10px",
    }}
  >
    {children}
  </li>
);

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const onLogin = async () => {
    await loginWithRedirect({
      prompt: "login",
    });
  };

  const onLogout = () => {
    logout();
  };

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
        }}
      >
        {isAuthenticated ? (
          <NavItem>
            <button onClick={onLogout}>Logout</button>
          </NavItem>
        ) : (
          <NavItem>
            <button onClick={onLogin}>Login</button>
          </NavItem>
        )}
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/profile">Profile</Link>
        </NavItem>
      </ul>
    </div>
  );
}
