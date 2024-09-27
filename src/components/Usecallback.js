import React, { useCallback, useState } from "react";

function IncrementButton({ onIncrement }) {
  console.log("function rendered");
  return <button onClick={onIncrement}>Increment</button>;
}

function Usecallback() {
  const [numbers, setNumbers] = useState([10, 8, 9, 2, 4]);
  const sortNumbers = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers].sort((a, b) => a - b));
  }, []);
  return (
    <div>
      <h1>Numbers:{numbers.join(" ")}</h1>
      <IncrementButton onIncrement={sortNumbers} />
    </div>
  );
}

export default Usecallback;
