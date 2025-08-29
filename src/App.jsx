import React, { useState } from "react";
import image from "./assets/investment-calculator-logo.png";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
function App() {
  // const [initialInvestment, setInitialInvestment] = useState("");
  // const [annualInvestment, setAnnualInvestment] = useState("");
  // const [expectedReturn, setExpectedReturn] = useState("");
  // const [duration, setDuration] = useState("");

 const [userInput,setUserInput] = useState({
    initialInvestment : "",
    annualInvestment : "",
    expectedReturn : "",
    duration : ""
    
  }

);
// console.log(userInput)


  // const handleInputChange = (e) => {
  //    console.log(e.target)
  // const { name, value } = e.target;
  //  setUserInput(prevInput => {
  //   return Object.assign({}, prevInput, { [name]: value });
  // });

  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserInput(prevInput => ({
    ...prevInput,
    [name]: value,
  }));

 
  // console.log(e.target.name)
  // console.log(e.target.value)
  // console.log(userInput)

  // const updatedInput = { 
  //   initialInvestment: userInput.initialInvestment,
  //   annualInvestment: userInput.annualInvestment,
  //   expectedReturn: userInput.expectedReturn,
  //   duration: userInput.duration
  // };
                                  
  // updatedInput[name] = value;
  // console.log(updatedInput)

  // setUserInput(updatedInput);
    // console.log(updatedInput)
};


  // let result = [];

  // if (Number(duration) > 0) {
  //   result = calculateInvestmentResults({
  //     initialInvestment: Number(initialInvestment),
  //     annualInvestment: Number(annualInvestment),
  //     expectedReturn: Number(expectedReturn),
  //     duration: Number(duration),
  //   });
  //   console.log(result);
  // }

  // const handleInvestmentChange = (value) => {
  //   setInitialInvestment(value)
  
  // };

  // const handleAnnualChange = (value) => {
  //   setAnnualInvestment(value)
  // }

  // const handleReturnChange = (value) => {
  //   setExpectedReturn(value)
  // }

  // const handleDurationChange = (value) => {
  //   setDuration(value)
  // }




//   const handleInputChange = (name, value) => {
//   switch (name) {
//     case 'initialInvestment':
//       setInitialInvestment(value);
//       break;
//     case 'annualInvestment':
//       setAnnualInvestment(value);
//       break;
//     case 'expectedReturn':
//       setExpectedReturn(value);
//       break;
//     case 'duration':
//       setDuration(value);
//       break;
//     default:
//       break;
//   }
// };



// const handleInputChange = (name, value) => {
//   if (name === 'initialInvestment') {
//     setInitialInvestment(value);
//   } else if (name === 'annualInvestment') {
//     setAnnualInvestment(value);
//   } else if (name === 'expectedReturn') {
//     setExpectedReturn(value);
//   } else if  (name === 'duration') {
//     setDuration(value);
//   }
// };


  return (
    <>
      <div id="header">
        <img src={image} alt="img" />
        <h1>Investment Calculator IN React</h1>
      </div>
      <UserInput 
      // onInitialInvestment={handleInvestmentChange}
      // setInitialInvestment={setInitialInvestment}
      // onAnnualInvestment = {handleAnnualChange}
      // setAnnualInvestment = {setAnnualInvestment}
      // onExpectedReturn = {handleReturnChange}
      // setExpectedReturn = {setExpectedReturn}
      // onDuration = {handleDurationChange}
      // setDuration = {setDuration}
      userInput={userInput}
      onInput={handleInputChange}/>

      <Results initialInvestment={userInput.initialInvestment}
        annualInvestment = {userInput.annualInvestment}
        expectedReturn = {userInput.expectedReturn}
        duration = {userInput.duration}
      />
       
      {/* <div id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              placeholder="123"
              onInput={(e) => setInitialInvestment(e.target.value)}
              value={initialInvestment}
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              placeholder="123"
              onInput={(e) => setAnnualInvestment(e.target.value)}
              value={annualInvestment}
            />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              placeholder="123"
              onInput={(e) => setExpectedReturn(e.target.value)}
              value={expectedReturn}
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              placeholder="123"
              onInput={(e) => setDuration(e.target.value)}
              value={duration}
            />
          </p>
        </div>
      </div> */}
      {/* <p>Please enter a duration greater than zero</p> */}

      {/* {Number(duration) <= 0 && (
        <p className="center">Please enter a duration greater than zero</p>
      )} */}

      {/* {result.length > 0 && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest(year)</th>
              <th>Total Interest </th>
              <th>Investedcapital</th>
            </tr>
          </thead>
          <tbody>
            {result.map((yearData) => {
              const totalInvestment =
                Number(initialInvestment) +
                yearData.annualInvestment * yearData.year;
              return (
                <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>
                    {formatter.format(
                      yearData.valueEndOfYear - totalInvestment
                    )}
                  </td>
                  <td>{formatter.format(totalInvestment)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )} */}
    </>
  );
}
export default App;
