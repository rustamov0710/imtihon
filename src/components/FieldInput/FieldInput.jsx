import React, { useState } from 'react'
import './FieldInput.css';
const FieldInput = (props) => {
  const {id , error, label,  ...inputValues} = props

  const [focused, setFocused] = useState(false);

  return (
    <div> 

        <input id={inputValues.name} focused={focused.toString()} 
        onFocus={(evt)=> inputValues.name == 'confirmPassword' && setFocused(true)}
        onBlur={(evt)=> setFocused(true)} {...inputValues}
        className="w-full px-4 py-2 border border-gray-300 rounded-[10px] outline-none focus:ring-2 focus:ring-indigo-500 "
        />

        <p className='text-red-500 hidden'>{error}</p>
    </div>
  )
}

export default FieldInput