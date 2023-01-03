import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "~/pages/root";
import Profile from "~/pages/profile";

export const routes = (
  <Route element={<Root />}>
    <Route path="/" element={<Profile />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
