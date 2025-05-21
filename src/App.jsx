import React from 'react'
import Header from "./components/Header";
import FormComponent from "./components/FormComponent";
import Result from "./components/Result";
// import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [formData, setFormData] = React.useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  return (
    <>
    <Header/>
    <FormComponent formData={formData} setFormData={setFormData}/>
    <Result 
    initialInvestment={formData.initialInvestment}
    annualInvestment={formData.annualInvestment}
    expectedReturn={formData.expectedReturn}
    duration={formData.duration}
    />
    </>
  )
}

export default App;
