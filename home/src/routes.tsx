import { Route, Routes } from "react-router-dom";
import Root from "~/pages/root";
import Home from "~/pages/home";
import About from "~/pages/about";

export const routes = (
  <Route element={<Root />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
);


