import { Route, Routes } from "react-router-dom";

import Navbar from "./components/nav-bar";
import Home from "./pages/home";
import Tracking from "./pages/my-tracking";
import Community from "./pages/community";

import style from "./app.module.scss";
function App() {
  return (
    <>
      <div className={style.container}>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
