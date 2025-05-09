import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
