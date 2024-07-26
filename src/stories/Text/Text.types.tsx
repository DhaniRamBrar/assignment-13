export interface TextProps {
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
  letterSpacing?: string;
  onClick?: () => void;
}
