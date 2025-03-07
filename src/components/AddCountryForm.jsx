import React, { useState } from 'react';

const AddCountryForm = ({ onAddCountry }) => {
    const [countryName, setCountryName] = useState('');

    const handleAddCountry = (e) => {
        e.preventDefault();
        if (countryName) {
            onAddCountry({ name: countryName, cities: [] });
            setCountryName('');
        }
    };

    return (
        <form onSubmit={handleAddCountry} className="mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Country Name"
                    value={countryName}
                    onChange={(e) => setCountryName(e.target.value)}
                />
            </div>
            <button type="submit" className="bluebtn">
                Add Country
            </button>
        </form>
    );
};

export default AddCountryForm;
