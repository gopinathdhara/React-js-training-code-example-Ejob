import { useRef, useEffect } from 'react';

export default function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
   inputRef.current.focus();
      // inputRef.current.textContent='This is second message';
  }, []);

  return (
    <input ref={inputRef} type="text" />
    // <div ref={inputRef}>Hi just loading.....</div>
  );
}