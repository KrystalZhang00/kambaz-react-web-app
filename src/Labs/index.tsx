import { Routes, Route, Navigate} from "react-router-dom";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import { Provider } from "react-redux";
import store from "./store";
// import HelloRedux from "./Lab4/ReduxExamples/HelloRedux";
// import CounterRedux from "./Lab4/ReduxExamples/CounterRedux";



export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <h2>Zhiyi Zhang</h2>
        <a
          id="wd-github"
          href="https://github.com/KrystalZhang00/kambaz-react-web-app"
          target="_blank"
        >
          GitHub Repository（Frontend）
        </a>
        <a
          id="wd-github"
          href="https://github.com/KrystalZhang00/kambaz-node-server-app"
          target="_blank"
        >
          GitHub Repository (Backend)
        </a>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2/*" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
          <Route path="Lab5/*" element={<Lab5 />} />


        </Routes>
        {/* <HelloRedux />
        <CounterRedux /> */}
      </div>
    </Provider>
  );
}
