import "./index.css";
import App from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Resources from "./components/resources/Resources.tsx";
import Layout from "./Layout.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
    </Route>
  )
);

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
