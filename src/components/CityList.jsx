import React from 'react';

const CityList = ({ countryName, cities, onRemoveCity, onSelectCity }) => {
    return (
        <ul className="list-group">
            {cities.map(city => (
                <li key={city.name} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{city.name}</span>
                    <div className="d-flex">
                        <button
                            className="btn btn-info btn-sm me-2"
                            onClick={() => onSelectCity(city)}
                        >
                            Select
                        </button>
                        <button
                            className="btn btn-sm"
                            onClick={() => onRemoveCity(countryName, city.name)}
                        >
                            <i className="fi fi-bs-trash text-danger" />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CityList;
