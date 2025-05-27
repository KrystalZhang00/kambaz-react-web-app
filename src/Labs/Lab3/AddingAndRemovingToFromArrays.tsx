export default function AddingAndRemovingToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
    let todoArray = [<li>Buy milk</li>, <li>Feed the pets</li>];
  
    // Add elements to the end of the arrays
    numberArray1.push(6);
    stringArray1.push("string3");
    todoArray.push(<li>Walk the dogs</li>);
  
    // Remove 1 item from index 2 (value 3)
    numberArray1.splice(2, 1);
  
    // Remove 1 item from index 1 ("string2")
    stringArray1.splice(1, 1);
  
    return (
      <div id="wd-adding-removing-from-arrays">
        <h4>Add/remove to/from arrays</h4>
        numberArray1 = {numberArray1} <br />
        stringArray1 = {stringArray1} <br />
        Todo list:
        <ol>{todoArray}</ol>
        <hr />
      </div>
    );
  }
  