import { useState, useEffect } from "react";

function Hello() {
  // 1 )
  function byeFn() {
    console.log("Destroyed! :(");
  }
  function hiFn() {
    console.log("Created! :)");
    return byeFn;
  }
  useEffect(hiFn, []);

  // 2 )
  // useEffect(() => {
  //   console.log("Created! :)");
  //   return () => console.log("Destroyed! :(");
  // }, []);

  // 3 )
  // useEffect(function () {
  //   console.log("Created! :)");
  //   return function () {
  //     console.log("Destroyed! :(");
  //   };
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
