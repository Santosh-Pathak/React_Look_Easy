import { useState } from "react";

function App() {
  //propagate the changes across the UI/DOM throught HOOkS
  // Date in frontend or UI can be only chnaged through hooks
  let  [counter , setCounter] = useState(5)

  //
  // let counter =5;
  //Function to update the value of counter  (Don't Work)
  const addValue =()=>{
  // console.log("VAlue Added",Math.random()*100);
    // counter++;
    if(counter >= 20)
      counter-1;
    else
      setCounter(counter+1);
    console.log(counter);
  }
  const subractValue =()=>{
    // console.log("VAlue Added",Math.random()*100);
      // counter++;
      if(counter<1)
      {
        counter+1;
      }
      else
      setCounter(counter-1);
      console.log(counter);
    }


  return <>
    <h1>Santosh Pathak || Chai Aur Code || Counter VAlue</h1>
    <div>
      <h2>CounterValue : {counter} </h2>
      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={subractValue}> Remove Value {counter}</button>
      <h1>{counter}</h1>

    </div>
  
  </>
}

export default App;
