import { Outlet } from "react-router";
import Navbar from "~/components/navbar";

export default function Root() {
  return (
    <div style={{ backgroundColor: "aliceblue", padding: "3px" }}>
      <Navbar />
      <h2>Remote - Home</h2>
      <Outlet />
    </div>
  );
}
