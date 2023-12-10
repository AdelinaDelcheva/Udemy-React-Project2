import {calculateInvestmentResults,formatter} from'../util/investment.js'
export default function Results({inputValue}){
    const values=calculateInvestmentResults(inputValue);
   const initalInvestment=values[0].valueEndOfYear-values[0].interest-values[0].annualInvestment;   
    return(<table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {values.map((v)=>{
                const totalInterest=v.valueEndOfYear-v.annualInvestment*v.year-initalInvestment;
                const totalAmountInvested=v.valueEndOfYear-totalInterest;
                return(<tr key={v.year}>
                          <td>{v.year}</td>
                          <td>{formatter.format(v.interest)}</td>
                          <td>{formatter.format(v.valueEndOfYear)}</td>
                          <td>{formatter.format(totalInterest)}</td> 
                          <td>{formatter.format(totalAmountInvested)}</td>                        

                       </tr>)
            })}
        </tbody>

    </table>)
}