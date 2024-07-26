import React from 'react';
import styled, { css } from 'styled-components';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  selectedColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonLabel = styled.label<{ $selectedColor?: string; $hoverColor?: string; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 1rem;
  color: ${({ $disabled }) => ($disabled ? '#999' : '#333')};
  user-select: none;

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `}

  &:hover .checkmark {
    background-color: ${({ $hoverColor, $disabled }) => (!$disabled && $hoverColor) || '#ccc'};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkmark {
      background-color: ${({ $selectedColor }) => $selectedColor || '#4CAF50'};
      border-color: ${({ $selectedColor }) => $selectedColor || '#4CAF50'};
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 24px;
    width: 24px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 50%;
    transition: background-color 0.3s, border-color 0.3s;

    &:after {
      content: '';
      position: absolute;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: white;
      transition: background-color 0.3s;
    }
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  selectedColor,
  hoverColor,
  disabled,
  checked,
  onChange,
}) => {
  return (
    <RadioButtonLabel
      $selectedColor={selectedColor}
      $hoverColor={hoverColor}
      $disabled={disabled}
      data-testid="radio-button-label"
    >
      {label}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        data-testid="radio-button-input"
      />
      <span className="checkmark" data-testid="radio-button-checkmark" />
    </RadioButtonLabel>
  );
};

export default RadioButton;
