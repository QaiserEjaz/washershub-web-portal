import React from 'react'

export default function CustomInputField({text,inputinfo,placeholder}) {
  return (
    <div className='customtextfield col-lg-12 d-flex justify-content-between align-items-center'>
    <div>{text}</div>
    
    <div className='d-flex align-items-center'>
      {inputinfo}
      <input type="text" className="form-control ms-2 " 
        placeholder={placeholder} 
        style={{ height: '23px', width: '70px', fontSize: '15px',
        padding: '2px 5px', textAlign:'center'}}
      />
    </div>
  </div>
  )
}
