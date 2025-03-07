import React, { useState } from 'react';

const AddAreaForm = ({ cityName, onAddArea }) => {
    const [areaName, setAreaName] = useState('');

    const handleAddArea = (e) => {
        e.preventDefault();
        if (areaName) {
            onAddArea(cityName, areaName);
            setAreaName('');
        }
    };

    return (
        <form onSubmit={handleAddArea} className="mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Area Name"
                    value={areaName}
                    onChange={(e) => setAreaName(e.target.value)}
                />
            </div>
            <button type="submit" className="bluebtn">
                Add Area
            </button>
        </form>
    );
};

export default AddAreaForm;
