// import { calculateInvestmentResults, formatter } from "./util/investment";


//  let result = [];
//   if (Number(duration) > 0) {
//     result = calculateInvestmentResults({
//       initialInvestment: Number(initialInvestment),
//       annualInvestment: Number(annualInvestment),
//       expectedReturn: Number(expectedReturn),
//       duration: Number(duration),
//     });
//     console.log(result);
//   }


//    {Number(duration) <= 0 && (
//         <p className="center">Please enter a duration greater than zero</p>
//       )}
// const Results = ({initialInvestment}) => {
//     return (
//              {result.length > 0 && (
//                      <table id="result">
//                        <thead>
//                          <tr>
//                            <th>Year</th>
//                            <th>Investment Value</th>
//                            <th>Interest(year)</th>
//                            <th>Total Interest </th>
//                            <th>Investedcapital</th>
//                          </tr>
//                        </thead>
//                        <tbody>
//                          {result.map((yearData) => {
//                            const totalInvestment =
//                              Number(initialInvestment) +
//                              yearData.annualInvestment * yearData.year;
//                            return (
//                              <tr key={yearData.year}>
//                                <td>{yearData.year}</td>
//                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
//                                <td>{formatter.format(yearData.interest)}</td>
//                                <td>
//                                  {formatter.format(
//                                    yearData.valueEndOfYear - totalInvestment
//                                  )}
//                                </td>
//                                <td>{formatter.format(totalInvestment)}</td>
//                              </tr>
//                            );
//                          })}
//                        </tbody>
//                      </table>
//                    )}
//     )
// }
// export default Results;

import { calculateInvestmentResults, formatter } from "../util/investment";

// const Results = ({ initialInvestment, annualInvestment, expectedReturn, duration }) => {
  const Results = ({ initialInvestment, annualInvestment, expectedReturn, duration }) => {
  let result = [];

  if (Number(duration) > 0) {
    result = calculateInvestmentResults({
      initialInvestment: Number(initialInvestment),
      annualInvestment: Number(annualInvestment),
      expectedReturn: Number(expectedReturn),
      duration: Number(duration),
    });
    console.log(result);
  }

  return (
    <>
      {Number(duration) <= 0 && (
        <p className="center">Please enter a duration greater than zero</p>
      )}

      {result.length > 0 && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {result.map((yearData) => {
              const totalInvestment =
                Number(initialInvestment) + yearData.annualInvestment * yearData.year;
              return (
                <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(yearData.valueEndOfYear - totalInvestment)}</td>
                  <td>{formatter.format(totalInvestment)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Results;
