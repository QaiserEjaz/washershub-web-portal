import React from 'react';

const CountryList = ({ countries, onSelectCountry, onRemoveCountry }) => {
    return (
        <ul className="list-group">
            {countries.map(country => (
                <li key={country.name} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{country.name}</span>
                    <div className="d-flex">
                        <button
                            className="btn btn-info btn-sm me-2"
                            onClick={() => onSelectCountry(country)}
                        >
                            Select
                        </button>
                        <button
                            className="btn btn-sm"
                            onClick={() => onRemoveCountry(country.name)}
                        >
                            <i className="fi fi-bs-trash text-danger"/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CountryList;
