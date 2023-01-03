import { Outlet } from "react-router";
import Navbar from "~/components/navbar";

export default function Root() {
  return (
    <div
      style={{
        backgroundColor: "palevioletred",
        padding: "3px",
      }}
    >
      <Navbar />
      <h1>Host</h1>
      <Outlet />
    </div>
  );
}
