import React from 'react';

export default function FormCmponent({formData, setFormData}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: Number(value),
        }));
    }
    return(
    <>
        <div id="user-input">
            <div className="input-grid">
                <div className="input-group">
                <label htmlFor='initial-investment'>INITIAL INVESTMENT
                    <input 
                    name="initialInvestment" 
                    id="initialInvestment"
                    type="number"
                    value={formData.initialInvestment}
                    onChange={handleChange}
                    />
                    </label>
                </div>
                <div className="input-group">
                <label htmlFor="annual-investment">ANNUAL INVESTMENT
                    <input 
                    name="annualInvestment"
                    id="annualInvestment"
                    type="number"
                    value={formData.annualInvestment}
                    onChange={handleChange}
                    />
                    </label>
                </div>
                <div className="input-group">
                <label htmlFor="expected-return">EXPECTED RETURN
                    <input 
                    name="expectedReturn"
                    id="expectedReturn"
                    type="number"
                    value={formData.expectedReturn}
                    onChange={handleChange}
                    />
                    </label>
                </div>
                <div className="input-group">
                <label htmlFor="duration">DURATION
                    <input 
                    name="duration"
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={handleChange}
                    />
                    </label>
                </div>
            </div>
        </div>
    </>);
}