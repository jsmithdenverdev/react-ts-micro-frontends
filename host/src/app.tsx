import { StrictMode, Suspense } from "react";
import { createRoutesFromElements, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "~/routes";

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
