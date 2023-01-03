import { Routes } from "react-router-dom";
import { routes } from "~/routes";

/**
 * FederatedModule represents the entrypoint to this federated module. In our
 * case the entrypoint is a collection of routes that will be mounted under a
 * browser-router running in a host application.
 * @returns
 */
export default function FederatedModule() {
  return <Routes>{routes}</Routes>;
}
