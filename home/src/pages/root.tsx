import { Outlet } from "react-router";

export default function Root() {
  return (
    <div style={{ backgroundColor: "aliceblue", padding: "3px" }}>
      <h2>Remote - Home</h2>
      <Outlet />
    </div>
  );
}
