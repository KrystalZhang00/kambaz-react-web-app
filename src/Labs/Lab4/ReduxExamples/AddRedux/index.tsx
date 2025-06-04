import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { FormControl, Button } from "react-bootstrap"; // 🔧 make sure bootstrap is installed

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);

  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>{a} + {b} = {sum}</h2>

      {/* Input for A */}
      <FormControl
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="mb-2"
      />

      {/* Input for B */}
      <FormControl
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="mb-2"
      />

      {/* Button to dispatch action */}
      <Button id="wd-add-redux-click" onClick={() => dispatch(add({ a, b }))}>
        Add Redux
      </Button>

      <hr />
    </div>
  );
}
