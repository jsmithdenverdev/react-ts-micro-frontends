import { Outlet } from "react-router";

export default function Root() {
  return (
    <div style={{ backgroundColor: "lemonchiffon", padding: "3px" }}>
      <h2>Remote - Profile</h2>
      <Outlet />
    </div>
  );
}
