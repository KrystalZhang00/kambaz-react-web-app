import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Kambaz from "./Kambaz";
import Labs from "./Labs";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          
        </Routes>
      </div>
    </HashRouter>
  );
}

