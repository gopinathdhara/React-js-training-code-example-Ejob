import React, { useState } from "react";
import Header from "./Header";
/* HOC component*/
export default function withHeader(Component) {
  function NewComponent(props) {
    const [count, setCount] = useState(10);
    return (
      <>
        {/* extra features */}
        <Header count={count} />
        {/* Normal Component */}
        <Component
          {...props}
          extraProp="Extra Prop"
          count={count}
          setCount={setCount}
        />
      </>
    );
  }
  return NewComponent;
}
