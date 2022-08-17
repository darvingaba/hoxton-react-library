import { useState } from "react"
type Props={
    label:string
}

export function CheckBox({label}:Props){

    let[checked,setChecked]=useState(false)

    let options = [
        {
            id: 1,
            name: "Option 1",
            checked: false,
            value: "option1"
        },
        {
            id: 2,
            name: "Option 2",
            checked: false,
            value: "option2"
        },
        {
            id: 3,
            name: "Option 3",
            checked: false,
            value: "option3"
        },
    ]
    let onChange = (e: any) => {
        setChecked(e.target.checked)
    }
    return (
        <div className="checkbox">
            <label className="checkb">{label}
            {options.map((option)=>(
                    <div className="checkInp" 
                        key={option.id}>
                        <input 
                           onClick={onChange} 
                           type="checkbox" 
                           name="option"/>
                        <label>{option.name}</label>
                        {checked ? <span>You checked {option.name}</span> : <span>Unchecked</span>}
                    </div> 
            ))}
            </label>
        </div>
    )
}