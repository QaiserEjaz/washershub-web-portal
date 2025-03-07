import React, { useState } from 'react';

const AddCityForm = ({ countryName, onAddCity }) => {
    const [cityName, setCityName] = useState('');

    const handleAddCity = (e) => {
        e.preventDefault();
        if (cityName) {
            onAddCity(countryName, cityName);
            setCityName('');
        }
    };

    return (
        <form onSubmit={handleAddCity} className="mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="City Name"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
            </div>
            <button type="submit" className="bluebtn">
                Add City
            </button>
        </form>
    );
};

export default AddCityForm;
