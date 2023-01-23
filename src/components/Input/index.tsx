import InputStyle from "./style";
import React, { ChangeEventHandler, useRef  } from "react";

interface Input {
    label?: string;
    error?: string | undefined;
    commentary?: string;
    placeholder?: string;
    type?: string;
    id?: string;
    func?: ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string;
};

const Input = ({label, placeholder, error, type, id, func, value, commentary}:Input)=>{
  
    return(
        <InputStyle>
        {label}
           <input type={type} 
           placeholder={placeholder}
           name={id}
           id={id}
           value={value}
           onChange={func}
           />
           <p>{commentary}</p>
       </InputStyle>
    )
};

export default Input;

