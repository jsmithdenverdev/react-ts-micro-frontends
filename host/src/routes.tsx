import { lazy } from "react";
import { Route } from "react-router-dom";
import Root from "~/pages/root";

// Remotes
const HomeRemote = lazy(() => import("remote_home/Application"));

export const routes = (
  <Route element={<Root />}>
    <Route path="/" element={<HomeRemote />} />
  </Route>
);
