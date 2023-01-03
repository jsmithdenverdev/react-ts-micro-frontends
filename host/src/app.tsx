import { StrictMode, Suspense } from "react";
import { RouterProvider } from "react-router";
import router from "~/router";

export default function App() {
  return (
    <StrictMode>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}
