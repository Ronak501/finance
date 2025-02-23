import "./index.css";
import App from "./pages/home/Home";
import About from "./pages/about/About";
import Resources from "./pages/resources/Resources";
import MeetUs from "./pages/contact/MeetUs";
import Team from "./pages/team/Team";
import Fund from "./pages/fund/Fund";
import ScrollToTop from "./pages/ScrollToTop";
import Layout from "./Layout";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<MeetUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/funddetails" element={<Fund />} />
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
