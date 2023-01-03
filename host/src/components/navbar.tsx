import { Link } from "react-router-dom";

const NavItem = ({ to, children }: any) => (
  <li
    style={{
      margin: "0px 10px",
    }}
  >
    {/* TODO: This is super obnoxious, but routes shared under a common remote
     * aren't updating correctly using just client-side routing. The entire
     * document needs to be refreshed to ensure the appropriate remote route
     * is rendered (e.g., client side routing doesn't update between / and /about)
     * but forcing a browser refresh ensures the appropriate route is rendered.
     * This also means that the entire document is repainted on navigating,
     * so an obnoxious flash occurs on the screen.
     */}
    <Link to={to} reloadDocument={true}>
      {children}
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
        }}
      >
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/profile">Profile</NavItem>
      </ul>
    </div>
  );
}
