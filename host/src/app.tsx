import { StrictMode, Suspense } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import routes from "~/routes";
import { configFromProcessEnv } from "~/config";

const config = configFromProcessEnv();
const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
  return (
    <StrictMode>
      <Suspense fallback="Loading...">
        <Auth0Provider
          clientId={config.AUTH0_CLIENT_ID}
          domain={config.AUTH0_DOMAIN}
          redirectUri={config.AUTH0_CALLBACK_URL}
        >
          <RouterProvider router={router} />
        </Auth0Provider>
      </Suspense>
    </StrictMode>
  );
}
