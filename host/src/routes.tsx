import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "~/pages/root";
import Private from "~/components/private";

// Remotes
const HomeRemote = lazy(() => import("remote_home/Application"));
const ProfileRemote = lazy(() => import("remote_profile/Application"));

const routes = (
  <Route element={<Root />}>
    <Route path="/*" element={<HomeRemote />} />
    <Route
      path="/profile/*"
      element={
        <Private>
          <ProfileRemote />
        </Private>
      }
    />
  </Route>
);

export default routes;
