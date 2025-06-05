import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Kambaz from "./Kambaz";
import Labs from "./Labs";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

