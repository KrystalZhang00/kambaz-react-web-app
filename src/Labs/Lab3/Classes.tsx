import './Classes.css';

export default function Classes() {
  const color = 'blue';       // can be "blue", "yellow", etc.
  const dangerous = true;     // change to false and re-test

  return (
    <div id="wd-classes">
      <h2>Classes</h2>

      {/* Static classes */}
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>

      {/* Dynamic class using template literal */}
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic {color} background
      </div>

      {/* Conditional class using ternary operator */}
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
        Dangerous background
      </div>

      <hr />
    </div>
  );
}
