import { Outlet } from "react-router";

export default function Root() {
  return (
    <div>
      <h1>Host</h1>
      <Outlet />
    </div>
  );
}
