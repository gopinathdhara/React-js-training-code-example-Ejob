import { useRef, useState } from "react";

export default function LogButtonClicks() {
  const countRef = useRef(0);
  const[hit,setHit]=useState(0);
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
    setHit(countRef.current);
  };

  console.log("I rendered!");

  return(
    <>
      <button onClick={handle}>Click me</button>
      <br></br>
      <h3>Page Hits Occurs {hit} times</h3>
    </>
  );
   
}
