import "./index.css";
import App from "./components/home/Home";
import About from "./components/about/About";
import Resources from "./components/resources/Resources";
import Contact from "./components/contact/Contact";
import Team from "./components/team/Team";
import SmeExchange from "./components/smeexchange/SmeExchange";
import Fund from "./components/fund/Fund";
import Layout from "./Layout";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/smeexchange" element={<SmeExchange />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = document.getElementById("root");

if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
