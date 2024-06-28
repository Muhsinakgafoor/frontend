import { useState } from 'react';

export default function Counter() {
  const [result, setResult] = useState(0);
  const [input1, setOne] = useState(0);
    const [input2, setTwo] = useState(0);

  function handleSubmit() {
    setResult(input1+input2)
  }

  function handlechanges1(e){
    setOne(e.target.value);
  }

   function handlechanges2(e){
    setTwo(e.target.value);

  
    
  }

  return (
    <>
    <input type='number' placeholder='enter your first number' onChange={handlechanges1}/>
        <input type='number' placeholder='enter your second number' onChange={handlechanges2}/>
    <button onClick={handleSubmit}>
     add
    </button>

    <h1>Your result {result}</h1>
      </>
      
  );
}
