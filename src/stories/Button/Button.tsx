import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './button.types';

const StyledButton = styled.button<{
  $variant: 'default' | 'outline';
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 12px; 
  padding: ${({ $size }) => ($size === 'large' ? '18px 36px' : $size === 'medium' ? '14px 28px' : '10px 20px')}; 
  font-size: ${({ $size }) => ($size === 'large' ? '22px' : $size === 'medium' ? '18px' : '16px')}; 
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)}; 
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  background-color: ${({ $variant }) => ($variant === 'outline' ? 'transparent' : '#1E90FF')}; 
  color: ${({ $variant }) => ($variant === 'outline' ? '#1E90FF' : '#FFFFFF')}; 
  border: ${({ $variant }) => ($variant === 'outline' ? '2px solid #1E90FF' : 'none')}; 
  &:hover {
    background-color: ${({ $variant, $disabled }) => !$disabled && ($variant === 'outline' ? 'transparent' : '#1C86EE')}; 
    border-color: ${({ $variant, $disabled }) => !$disabled && $variant === 'outline' ? '#1C86EE' : 'none'};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, variant = 'default', size = 'medium', disabled = false }) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled}
      disabled={disabled} // Ensure the disabled attribute is set on the button element
    >
      {label}
    </StyledButton>
  );
};

export default Button;
