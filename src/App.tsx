import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Kambaz from "./Kambaz";
import Labs from "./Labs";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* 设置默认路径重定向 */}
          <Route path="/" element={<Navigate to="/Kambaz" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          
        </Routes>
      </div>
    </HashRouter>
  );
}

