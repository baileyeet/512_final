import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/nav-bar";
import Home from "./pages/home";
import Tracking from "./pages/my-tracking";
import Community from "./pages/community";
import Resources from "./pages/resources";
import SymptomMap from "./pages/symptom-map";
import Landing  from "./pages/landing";

import style from "./app.module.scss";
function App() {
  const location  = useLocation();
  const containerType = (location.pathname === "/resources") ? style.containerResources : style.container;
  return (
    <>
      <div className={containerType}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/profile" element={<Tracking />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/map" element={<SymptomMap />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
