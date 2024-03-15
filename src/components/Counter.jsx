import React, { useEffect, useMemo, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    };
    fetchPost();
  }, []);
  const calculation = useMemo(()=>{
    expensiveCalculation(count);
  }, [count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
      <br />
      <hr />
      <br />
      <h3>Use Effect Examples</h3>
      <div>
      {data ? (
        <>
          <p>Posts: </p>
          <ul>
            {data.map((post) => <li key={post.id}>{post.title}</li>) }
          </ul>
          <p>{calculation}</p>
        </>
      ) : (<p>Loading ...</p>)}
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Counter;

const expensiveCalculation = (num) => {
  console.log('calculatng');
  for(let i =0; i<10000000; i++){
    num+=1;
  }

  return num;
}