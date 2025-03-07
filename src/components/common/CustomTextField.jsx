import React from 'react'
export default function CustomTextField({ text, state, number, color, onClick, icon }) {

    return (
        <div className='customtextfield col-lg-12 d-flex justify-content-between ' onClick={onClick} >
            {text}

            {number ?
                <span className="d-flex align-items-center">
                    {number}{<i className={icon}/>}
                </span>
                :
                <span className="d-flex align-items-center" style={{ color }}>
                    {state} {<i className={icon} style={{ marginLeft: '8px' }} /> }
                </span>
                
            }
        </div>
    )
}

