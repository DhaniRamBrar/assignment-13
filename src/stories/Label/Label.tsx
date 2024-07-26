import React from "react";
import { StyledLabelProps } from "./Label.types.tsx";

function StyledLabel({ 
  text, 
  color = "black", 
  fontSize = "16px", 
  fontWeight = "normal", 
  textTransform = "none", 
  underline = false, 
  onClick 
}: StyledLabelProps) {
  const style = {
    color,
    fontSize,
    fontWeight,
    textDecoration: underline ? "underline" : "none",
    textTransform,
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <label onClick={onClick} style={style} data-testid="styled-label">
      {text}
    </label>
  );
}

export default StyledLabel;
