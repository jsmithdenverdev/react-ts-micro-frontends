import { Route } from "react-router-dom";
import Root from "~/pages/root";
import Profile from "~/pages/profile";

const routes = (
  <Route element={<Root />}>
    <Route path="/" element={<Profile />} />
  </Route>
);

export default routes;
