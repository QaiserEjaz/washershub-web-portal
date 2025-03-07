import React from 'react';

export default function ClickableCard({boxColor,textColor, text, data}) {
    return (
        <div>
            <div className="card" 
                style={{ backgroundColor: boxColor, 
                        cursor: 'pointer', margin: '0.8em', width: '15em', height: '8em' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'grey' }}>{text}</h5>
                    <p className="card-text fs-3 fw-bold " style={{ color: textColor }}>{data}</p>
                </div>
            </div>
        </div>
    );
}
