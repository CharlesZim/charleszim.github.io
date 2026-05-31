import { Routes, Route } from "react-router-dom";

import { BriefProvider } from "./context/BriefContext";
import Workspace from "./workspace/Workspace";
import Privacy from "./sections/Footer/Privacy";

import "./App.css";

function App() {
  return (
    <BriefProvider>
      <Routes>
        <Route exact path="/" element={<Workspace />} />
        <Route path="confidentiality" element={<Privacy />} />
      </Routes>
    </BriefProvider>
  );
}

export default App;
