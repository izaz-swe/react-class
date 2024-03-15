import React, { useEffect, useMemo, useState } from "react";

function Hook() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [calculation, setCalculation] = useState(0);
  const handleAddData = () => {
    setData((prev) => [...prev, "New Data"]);
  }

  useMemo(()=> {
    setCalculation(expensiveCalculation(count));
  }, [count])
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}> + </button>
        <button onClick={() => setCount(count - 1)}> - </button>
        <h2>Expensive Calculation</h2>
        <p>{calculation}</p>
      </div>
      <hr />
      <div>
        <p>Posts: </p>
        {data.map((item, idx) => {
          return <p key={idx}>{item}</p>
        })}
        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
}

export default Hook;

const expensiveCalculation = (num) => {
  console.log('calculatng');
  for(let i =0; i<10000000; i++){
    num+=1;
  }

  return num;
}