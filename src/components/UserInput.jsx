import { useState } from "react"

export default function UserInput({onChangeInput,inputValue}){       
    
    return(
        <section id="user-input"> 
        <div className="input-group">
            <p>
                <label>initial investment</label>
                <input type="number" required value={inputValue.initialInvestment} onChange={(e)=>onChangeInput('initialInvestment',e)} />
            </p>
            <p>
                <label>annual investment</label>
                <input type="number" required  value={inputValue.annualInvestment} onChange={(e)=>onChangeInput('annualInvestment',e)}/>
            </p>
            <p>
                <label>expected return</label>
                <input type="number" required value={inputValue.expectedReturn} onChange={(e)=>onChangeInput('expectedReturn',e)}/>
            </p>
            <p>
                <label>duration</label>
                <input type="number" required value={inputValue.duration} onChange={(e)=>onChangeInput('duration',e)}/>
            </p>
        </div>
        </section>
        
    )
}