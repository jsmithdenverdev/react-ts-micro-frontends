import { Outlet } from "react-router";

export default function Root() {
  return (
    <div
      style={{
        backgroundColor: "palevioletred",
        padding: "3px",
      }}
    >
      <h1>Host</h1>
      <Outlet />
    </div>
  );
}
