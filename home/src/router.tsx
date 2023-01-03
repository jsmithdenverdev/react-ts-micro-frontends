import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "~/pages/root";
import Home from "~/pages/home";
import About from "~/pages/about";

const routes = (
  <Route element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;
