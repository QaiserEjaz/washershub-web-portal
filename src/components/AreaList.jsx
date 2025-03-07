import React from 'react';

const AreaList = ({ cityName, areas, onRemoveArea }) => {
    return (
        <ul className="list-group">
            {areas.map(area => (
                <li key={area} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{area}</span>
                    <button
                        className="btn btn-sm"
                        onClick={() => onRemoveArea(cityName, area)}
                    >
                        <i className="fi fi-bs-trash text-danger" />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default AreaList;
