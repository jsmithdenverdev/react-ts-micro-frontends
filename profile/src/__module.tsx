import { RouterProvider } from "react-router-dom";
import router from "~/router";

/**
 * FederatedModule represents the entrypoint to this federated module. In our
 * case the entrypoint is a collection of routes that will be mounted under a
 * browser-router running in a host application.
 * @returns
 */
export default function FederatedModule() {
  return <RouterProvider router={router} />;
}
