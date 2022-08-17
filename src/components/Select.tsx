import { useState } from "react"

type SelectProps = {
    backgroundColor?: "White"| "Yellow" | "Green";
}
export function Select(){
    let [selected,setSelected]=useState("")



    let options = [
        {
            id: 1,
            name: "White",
            checked: false,
            value: "White"
        },
        {
            id: 2,
            name: "Yellow",
            checked: false,
            value: "Yellow"
        },
        {
            id: 3,
            name: "Green",
            checked: false,
            value: "Green"
        }
    ]

    let onChange = (e: any) => {
        setSelected(e.target.value)
        console.log(selected)
    }
    return (
      <div className="select">
        <label className="select"> Select background color</label>
        <select name="colors" id="color">
          {options.map((option) => (
            <option
              onChange={onChange}
              key={option.id}
              value={option.value}
            >
              {option.name}
              
            </option>
          ))}
        </select>
      </div>
    );
}