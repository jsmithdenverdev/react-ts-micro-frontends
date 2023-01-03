import { Outlet } from "react-router-dom";
import Navbar from "~/components/navbar";

export default function DevRoot() {
  return (
    <div style={{ backgroundColor: "lemonchiffon", padding: "3px" }}>
      <h2>Remote - Profile</h2>
      <Navbar />
      <Outlet />
    </div>
  );
}
