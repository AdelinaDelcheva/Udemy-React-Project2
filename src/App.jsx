import { useState } from "react";
import Results from "./components/Results"
import UserInput from "./components/UserInput"


function App() {
  const [input,setInput]=useState({
    initialInvestment:1000,
    annualInvestment:120,
    expectedReturn:6,
    duration:10,
});

const inputIsValid=input.duration>0 && input.initialInvestment>0 && input.annualInvestment>0 && input.expectedReturn>0;

function handleChange(inputIdentifier,event){
  setInput((oldValues)=>{
   return( {
       ...oldValues,
      [inputIdentifier]:+event.target.value,
   }

   )
  })
}
  return (
    <>
      <UserInput onChangeInput={handleChange} inputValue={input}/>
      {inputIsValid && <Results inputValue={input}/>}
      {!inputIsValid && <p className="center">Please enter valid input data!</p>}
    </>
  )
}

export default App
