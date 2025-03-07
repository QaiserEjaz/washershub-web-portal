import React, { useState, useEffect } from 'react';

export default function ToggleSwitch({ initialState, onToggle }) {
  const [isActive, setIsActive] = useState(initialState === 'Active');

  useEffect(() => {
    setIsActive(initialState === 'Active');
  }, [initialState]);

  const handleToggle = () => {
    const newStatus = isActive ? 'Inactive' : 'Active';
    setIsActive(!isActive);
    onToggle(newStatus); 
  };

  return (
    <div className="form-check form-switch" style={{ justifyContent: 'space-around' }}>
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        checked={isActive}
        onChange={handleToggle}
      />
      <label
        className={`form-check-label ${isActive ? 'text-success' : 'text-danger'}`}
        htmlFor="flexSwitchCheckDefault"
      >
        {isActive ? 'Active' : 'Inactive'}
      </label>
    </div>
  );
}
