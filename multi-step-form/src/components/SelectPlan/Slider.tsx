import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { SliderProps } from '../../types';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: rgba(123, 104, 238, 0.2);
  width: 100%;
  padding: 1rem;
  border-radius: 15px;

`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 50px;
  height: 25px;
  background: ${({ theme }) => theme.colors.primary.marineBlue};
  outline: none;
  opacity: 0.7;
  transition: .2s;
  border-radius: 15px;
  padding: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 17px;
    height: 17px;
    background: ${({ theme }) => theme.colors.neutral.white};
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 17px;
    height: 17px;
    background: ${({ theme }) => theme.colors.neutral.white};
    cursor: pointer;
    border-radius: 50%;
  }

  &:focus {
    opacity: 1;
  }
`;

const Slider: React.FC<SliderProps> = ({setBillingCycle}) => {
  const [value, setValue] = useState<number>(0);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    setBillingCycle(e.target.value === '0' ? 'monthly' : 'yearly');
  };

  return (
    <SliderContainer>
      <label>Monthly</label>
      <StyledInput 
        type="range" 
        min="0" 
        max="100" 
        step="100"
        value={value} 
        onChange={handleOnChange} 
        aria-label='Select Monthly or Yearly Billing'
      />
      <label>Yearly</label>
     
    </SliderContainer>
  );
}

export default Slider;
