import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "~/pages/root";

// Remotes
const HomeRemote = lazy(() => import("remote_home/Application"));
const ProfileRemote = lazy(() => import("remote_profile/Application"));

const routes = (
  <Route element={<Root />}>
    <Route path="/*" element={<HomeRemote />} />
    <Route path="/profile/*" element={<ProfileRemote />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
