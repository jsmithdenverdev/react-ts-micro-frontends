import { useAuth0 } from "@auth0/auth0-react";
import { configFromProcessEnv } from "~/config";

const config = configFromProcessEnv();

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
    logout({ returnTo: config.AUTH0_CALLBACK_URL });
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
      </ul>
    </div>
  );
}
