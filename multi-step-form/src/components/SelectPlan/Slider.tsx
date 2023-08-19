import React, { ChangeEvent, useState } from 'react';

const Slider: React.FC = () => {
  const [value, setValue] = useState<number>(0); // Initial value

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
        <label>Monthly</label>
      <input 
        type="range" 
        min="0" 
        max="100" 
        step="100"
        value={value} 
        onChange={handleOnChange} 
        aria-label='Select Monthly or Yearly Billing'
      />
      <label>Yearly</label>
      <p>Value: {value == 0 ? "Monthly" : "Yearly"}</p>
    </div>
  );
}

export default Slider;
