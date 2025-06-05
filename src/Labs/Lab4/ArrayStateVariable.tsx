import { useState } from "react";
import "./index.css"; // 👈 Import the CSS

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="add-btn" onClick={addElement}>Add Element</button>

      <ul className="custom-list">
        {array.map((item, index) => (
          <li key={index} className="list-item">
            <span className="item-value">{item}</span>
            <button className="delete-btn" onClick={() => deleteElement(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
}
