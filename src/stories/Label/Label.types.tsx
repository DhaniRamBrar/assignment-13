export interface StyledLabelProps {
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  underline?: boolean;
  onClick?: () => void;
}