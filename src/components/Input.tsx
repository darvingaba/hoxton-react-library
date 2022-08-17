

import { useState } from "react";
type Props ={
  inputName: string
}

export function Input({inputName,...props}:Props){
    let [show, setShow] = useState(false);

    let changeShow = ()=>setShow((toggle)=>!toggle)

    return (
      <div className="inputContainer">
        <label htmlFor="input">
          {inputName}<span onClick={() => changeShow()}>{show?"-":"+"}</span>
          
        </label>
        {show ? (
          <input className="inp" {...props} type="text" name="input" />
        ) : (
          ""
        )}
      </div>
    );
}