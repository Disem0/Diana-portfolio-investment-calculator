import { calculateInvestmentResults } from "../util/investment";
import {formatter} from "../util/investment";

export default function Result({initialInvestment, annualInvestment, expectedReturn, duration}) {
    const investmentData = {
        initialInvestment: initialInvestment,
        annualInvestment: annualInvestment,
        expectedReturn: expectedReturn,
        duration: duration
    }
    const results = calculateInvestmentResults(investmentData);
    // const roundedResults = results.map(item => ({
    //     ...item,
    //     annualInvestment: Math.round(item.annualInvestment),
    //     valueEndOfYear: Math.round(item.valueEndOfYear),
    //     interest: Math.round(item.interest),
    //     totalInterest: Math.round(item.totalInterest),
    // }));
    // console.log(results);

    return(
        <div id="result" className="center">
            <table>
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
                    {results.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(Number(item.interest))}</td>
                            <td>{formatter.format(Number(item.totalInterest))}</td>
                            <td>{formatter.format(Number(investmentData.initialInvestment + item.annualInvestment * item.year))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}