import { StrictMode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  RouterProvider,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import routes from "~/routes";
import { configFromProcessEnv } from "~/config";
import DevRoot from "~/pages/dev-root";

const config = configFromProcessEnv();
const router = createBrowserRouter(
  createRoutesFromElements(<Route element={<DevRoot />}>{routes}</Route>)
);

export default function App() {
  return (
    <StrictMode>
      <Auth0Provider
        clientId={config.AUTH0_CLIENT_ID}
        domain={config.AUTH0_DOMAIN}
        redirectUri={config.AUTH0_CALLBACK_URL}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </StrictMode>
  );
}
