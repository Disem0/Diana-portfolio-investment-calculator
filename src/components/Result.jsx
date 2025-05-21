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
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.totalInterest)}</td>
                            <td>{formatter.format(investmentData.initialInvestment + item.annualInvestment * item.year)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}