import { StrictMode, Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import routes from "~/routes";

const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
  return (
    <StrictMode>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}
