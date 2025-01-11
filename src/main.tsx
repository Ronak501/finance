import "./index.css";
import App from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Resources from "./components/resources/Resources.tsx";
import Contact from "./components/contact/Contact.tsx";
import Team from "./components/team/Team.tsx";
import SmeExchange from "./components/smeexchange/SmeExchange.tsx";
import Fund from "./components/fund/Fund.tsx";
import Layout from "./Layout.tsx";
import SignIn from "./components/signIn/SignIn.tsx";
import SignUp from "./components/signUp/SignUp.tsx";
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
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/smeexchange" element={<SmeExchange />} />
      <Route path="/fund" element={<Fund />} />
      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/signup" element={<SignUp />} />
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
