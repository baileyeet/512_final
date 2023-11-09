import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/nav-bar";
import Home from "./pages/home";
import Tracking from "./pages/my-tracking";
import Community from "./pages/community";
import Resources from "./pages/resources";

import style from "./app.module.scss";
function App() {
  const location  = useLocation();
  const containerType = (location.pathname === "/resources") ? style.containerResources : style.container;
  return (
    <>
      <div className={containerType}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
