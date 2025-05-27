export default function Destructing() {
    const person = { name: "John", age: 25 };
  
    // Object destructuring: pulls out name and age from the object
    const { name, age } = person;
  
    // Array destructuring: pulls out the first 3 values by position
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;
  
    return (
      <div id="wd-destructing">
        <h2>Destructing</h2>
  
        <h3>Object Destructing</h3>
        const &#123; name, age &#125; =
        &#123; name: "John", age: 25 &#125;<br /><br />
        name = {name}<br />
        age = {age}
  
        <h3>Array Destructing</h3>
        const [first, second, third] = ["one","two","three"]<br/><br/>
        first = {first}<br />
        second = {second}<br />
        third = {third}
        <hr />
      </div>
    );
  }
  