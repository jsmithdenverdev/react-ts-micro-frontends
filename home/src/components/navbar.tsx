import { Link } from "react-router-dom";

const NavItem = ({ to, children }: any) => (
  <li
    style={{
      margin: "0px 10px",
    }}
  >
    <Link to={to}>{children}</Link>
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
      </ul>
    </div>
  );
}
