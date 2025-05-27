export default function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
  
    // A named arrow function that squares a number
    const square = (a: number) => a * a;
  
    const todos = ["Buy milk", "Feed the pets"];
  
    // Use .map() to square each number
    const squares = numberArray1.map(square);
  
    // Use inline arrow function to cube each number
    const cubes = numberArray1.map((a) => a * a * a);
  
    return (
      <div id="wd-map-function">
        <h4>Map Function</h4>
        squares = {squares} <br />
        cubes = {cubes} <br />
        Todos:
        <ol>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol>
        <hr />
      </div>
    );
  }
  